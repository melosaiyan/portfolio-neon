import { useEffect, useState } from 'react';

/** Animates a number from 0 to `target` once `start` becomes true. */
export function useCountUp(target: number, start: boolean, durationMs = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame = 0;
    const begin = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - begin) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start, durationMs]);

  return value;
}
