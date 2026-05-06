export async function printHtmlDocument(options: {
  html: string;
  title: string;
}): Promise<void> {
  const printWindow = window.open('', '_blank');

  if (!printWindow) {
    throw new Error('POPUP_BLOCKED');
  }

  printWindow.document.open();
  printWindow.document.write(options.html);
  printWindow.document.close();
  printWindow.document.title = options.title;

  try {
    printWindow.name = options.title;
  } catch {
    // Ignore environments where window.name assignment is restricted.
  }

  await waitForDocumentImages(printWindow.document);

  await new Promise<void>((resolve) => {
    let resolved = false;
    const cleanup = () => {
      if (resolved) return;
      resolved = true;
      try {
        printWindow.close();
      } catch {
        // Ignore close errors.
      }
      resolve();
    };

    printWindow.onafterprint = cleanup;

    window.setTimeout(() => {
      try {
        printWindow.focus();
        printWindow.print();
      } catch {
        cleanup();
        return;
      }

      window.setTimeout(cleanup, 15000);
    }, 80);
  });
}

async function waitForDocumentImages(document: Document): Promise<void> {
  const images = Array.from(document.images ?? []);
  const pending = images.filter((img) => !img.complete);
  if (pending.length === 0) return;

  await Promise.race([
    Promise.allSettled(
      pending.map(
        (img) =>
          new Promise<void>((resolve) => {
            const done = () => {
              img.removeEventListener('load', done);
              img.removeEventListener('error', done);
              resolve();
            };
            img.addEventListener('load', done, { once: true });
            img.addEventListener('error', done, { once: true });
          }),
      ),
    ),
    new Promise<void>((resolve) => window.setTimeout(resolve, 7000)),
  ]);
}
