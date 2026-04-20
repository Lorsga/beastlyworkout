import { createServer } from 'node:http';
import { existsSync, readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { createSign } from 'node:crypto';
import { dirname, extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, 'public');

loadDotEnv();

const port = Number(process.env.PORT ?? 3000);

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
};

const tokenCache = {
  accessToken: '',
  expiresAt: 0,
};

class RequestError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.name = 'RequestError';
    this.statusCode = statusCode;
  }
}

function loadDotEnv() {
  const envPath = join(__dirname, '.env');
  if (!existsSync(envPath)) return;

  const raw = readFileSync(envPath, 'utf8');
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex < 1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

function json(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(JSON.stringify(payload));
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function applySecurityHeaders(res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');
}

function applyCors(req, res) {
  const origin = req.headers.origin;
  const allowedOrigins = (process.env.ALLOWED_ORIGINS ?? `http://localhost:${port}`)
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  }
}

async function readRequestBody(req) {
  const chunks = [];
  let size = 0;

  for await (const chunk of req) {
    size += chunk.length;
    if (size > 1_000_000) {
      throw new RequestError(413, 'Payload too large');
    }
    chunks.push(chunk);
  }

  if (!chunks.length) {
    return {};
  }

  const raw = Buffer.concat(chunks).toString('utf8');
  try {
    return JSON.parse(raw);
  } catch {
    throw new RequestError(400, 'Invalid JSON body');
  }
}

function normalizePhone(value) {
  return value.replace(/[^\d+\s()-]/g, '').replace(/\s+/g, ' ').trim();
}

function validateLead(payload) {
  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const phone = typeof payload.phone === 'string' ? normalizePhone(payload.phone) : '';
  const honey = typeof payload.website === 'string' ? payload.website.trim() : '';

  if (honey) {
    return { ok: false, statusCode: 400, error: 'Submission rejected.' };
  }

  if (name.length < 2) {
    return { ok: false, statusCode: 400, error: 'Inserisci un nome valido.' };
  }

  if (name.length > 80) {
    return { ok: false, statusCode: 400, error: 'Il nome e troppo lungo.' };
  }

  const digits = phone.replace(/\D/g, '');
  if (digits.length < 6) {
    return { ok: false, statusCode: 400, error: 'Inserisci un numero di telefono valido.' };
  }

  if (phone.length > 30) {
    return { ok: false, statusCode: 400, error: 'Il numero di telefono e troppo lungo.' };
  }

  return {
    ok: true,
    value: {
      name,
      phone,
    },
  };
}

function getRequiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function getGoogleConfig() {
  return {
    serviceAccountEmail: getRequiredEnv('GOOGLE_SERVICE_ACCOUNT_EMAIL'),
    privateKey: getRequiredEnv('GOOGLE_PRIVATE_KEY').replace(/\\n/g, '\n'),
    spreadsheetId: getRequiredEnv('GOOGLE_SHEETS_SPREADSHEET_ID'),
    sheetName: process.env.GOOGLE_SHEETS_SHEET_NAME?.trim() || 'Leads',
    gymName: process.env.GYM_NAME?.trim() || 'Beastly Workout',
    ownerEmail: process.env.GOOGLE_SHEETS_OWNER_EMAIL?.trim() || '',
    timezone: process.env.TIMEZONE?.trim() || 'Europe/Rome',
  };
}

function base64UrlEncode(value) {
  return Buffer.from(value)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');
}

function createJwtAssertion(config) {
  const issuedAt = Math.floor(Date.now() / 1000);
  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };
  const payload = {
    iss: config.serviceAccountEmail,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: issuedAt + 3600,
    iat: issuedAt,
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const unsignedToken = `${encodedHeader}.${encodedPayload}`;

  const signer = createSign('RSA-SHA256');
  signer.update(unsignedToken);
  signer.end();

  const signature = signer.sign(config.privateKey);
  const encodedSignature = base64UrlEncode(signature);

  return `${unsignedToken}.${encodedSignature}`;
}

async function getGoogleAccessToken() {
  if (tokenCache.accessToken && tokenCache.expiresAt > Date.now() + 60_000) {
    return tokenCache.accessToken;
  }

  const config = getGoogleConfig();
  const assertion = createJwtAssertion(config);
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Google auth failed: ${text}`);
  }

  const data = await response.json();
  tokenCache.accessToken = data.access_token;
  tokenCache.expiresAt = Date.now() + (Number(data.expires_in ?? 3600) * 1000);

  return tokenCache.accessToken;
}

async function appendLeadToSheet(lead) {
  const config = getGoogleConfig();
  const accessToken = await getGoogleAccessToken();
  const range = encodeURIComponent(`${config.sheetName}!A:F`);

  const localTimestamp = new Intl.DateTimeFormat('it-IT', {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: config.timezone,
  }).format(new Date());

  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [[
          new Date().toISOString(),
          localTimestamp,
          lead.name,
          lead.phone,
          config.gymName,
          config.ownerEmail || 'owner-not-set',
        ]],
      }),
    },
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Google Sheets append failed: ${text}`);
  }
}

async function sendStaticFile(req, res) {
  const requestedPath = req.url === '/' ? '/index.html' : req.url;
  const relativePath = requestedPath.split('?')[0];
  const safePath = normalize(relativePath).replace(/^(\.\.(\/|\\|$))+/, '');

  if (safePath.includes('..')) {
    json(res, 400, { ok: false, error: 'Invalid path' });
    return;
  }

  const filePath = join(publicDir, safePath === '/' ? 'index.html' : safePath);

  try {
    let file = await readFile(filePath);
    const extension = extname(filePath);
    const contentType = mimeTypes[extension] ?? 'application/octet-stream';

    if (extension === '.html') {
      const config = getGoogleConfigSafe();
      const html = file.toString('utf8')
        .replaceAll('__GYM_NAME__', escapeHtml(config.gymName))
        .replaceAll('__PAGE_TITLE__', escapeHtml(`${config.gymName} | Consulenza gratuita`));
      file = Buffer.from(html, 'utf8');
    }

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': extension === '.html' ? 'no-store' : 'public, max-age=31536000, immutable',
    });
    res.end(file);
  } catch {
    json(res, 404, { ok: false, error: 'Not found' });
  }
}

function getGoogleConfigSafe() {
  return {
    gymName: process.env.GYM_NAME?.trim() || 'Beastly Workout',
  };
}

const server = createServer(async (req, res) => {
  applySecurityHeaders(res);
  applyCors(req, res);

  try {
    if (req.method === 'OPTIONS' && req.url === '/api/leads') {
      res.writeHead(204);
      res.end();
      return;
    }

    if (req.method === 'GET' && req.url === '/api/health') {
      const ready = Boolean(
        process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
        process.env.GOOGLE_PRIVATE_KEY &&
        process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      );

      json(res, 200, {
        ok: true,
        ready,
        gymName: process.env.GYM_NAME?.trim() || 'Beastly Workout',
        sheetName: process.env.GOOGLE_SHEETS_SHEET_NAME?.trim() || 'Leads',
        ownerEmail: process.env.GOOGLE_SHEETS_OWNER_EMAIL?.trim() || null,
      });
      return;
    }

    if (req.method === 'POST' && req.url === '/api/leads') {
      const payload = await readRequestBody(req);
      const validation = validateLead(payload);

      if (!validation.ok) {
        json(res, validation.statusCode, {
          ok: false,
          error: validation.error,
        });
        return;
      }

      await appendLeadToSheet(validation.value);
      json(res, 200, {
        ok: true,
        message: 'Richiesta inviata. Ti contatteremo presto.',
      });
      return;
    }

    if (req.method === 'GET') {
      await sendStaticFile(req, res);
      return;
    }

    json(res, 405, { ok: false, error: 'Method not allowed' });
  } catch (error) {
    console.error(error);
    const statusCode = error instanceof RequestError ? error.statusCode : 500;
    json(res, statusCode, {
      ok: false,
      error: error instanceof Error ? error.message : 'Unexpected server error',
    });
  }
});

server.listen(port, () => {
  console.log(`Gym landing page running on http://localhost:${port}`);
});
