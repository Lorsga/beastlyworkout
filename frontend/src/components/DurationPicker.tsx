import { useEffect, useState, type FocusEventHandler } from 'react';

import {
  buildDurationSeconds,
  formatDurationLabel,
  sanitizeDurationInput,
  splitDurationSeconds,
} from '../utils/duration';

type DurationPickerProps = {
  label: string;
  value: number | '';
  onChange: (value: number) => void;
  onFocus?: FocusEventHandler<HTMLInputElement>;
};

export function DurationPicker({ label, value, onChange, onFocus }: DurationPickerProps) {
  const parts = splitDurationSeconds(value);
  const [minutesInput, setMinutesInput] = useState(String(parts.minutes));
  const [secondsInput, setSecondsInput] = useState(String(parts.seconds));

  useEffect(() => {
    setMinutesInput(String(parts.minutes));
    setSecondsInput(String(parts.seconds));
  }, [parts.minutes, parts.seconds]);

  function commit(nextMinutes: string, nextSeconds: string) {
    onChange(buildDurationSeconds({
      minutes: nextMinutes === '' ? 0 : Number(nextMinutes),
      seconds: nextSeconds === '' ? 0 : Number(nextSeconds),
    }));
  }

  return (
    <div className="exercise-duration-field">
      <div className="exercise-duration-head">
        <span>{label}</span>
        <strong>{formatDurationLabel(value)}</strong>
      </div>
      <div className="exercise-duration-grid exercise-duration-grid-compact">
        <label className="exercise-duration-segment">
          <span>Min</span>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            onFocus={onFocus}
            value={minutesInput}
            onChange={(event) => {
              const nextMinutes = sanitizeDurationInput(event.target.value);
              setMinutesInput(nextMinutes);
              commit(nextMinutes, secondsInput);
            }}
            aria-label={`${label} minuti`}
          />
        </label>
        <label className="exercise-duration-segment">
          <span>Sec</span>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            onFocus={onFocus}
            value={secondsInput}
            onChange={(event) => {
              const nextSeconds = sanitizeDurationInput(event.target.value, 59);
              setSecondsInput(nextSeconds);
              commit(minutesInput, nextSeconds);
            }}
            aria-label={`${label} secondi`}
          />
        </label>
      </div>
    </div>
  );
}
