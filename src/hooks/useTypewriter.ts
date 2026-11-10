import { useEffect, useState } from 'react';

/** Types each word, pauses, deletes it, then moves to the next one. */
export function useTypewriter(words: string[], typeMs = 70, deleteMs = 35, pauseMs = 1400) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const word = words[index % words.length] ?? '';

  useEffect(() => {
    let delay = deleting ? deleteMs : typeMs;
    if (!deleting && length === word.length) delay = pauseMs;

    const timer = window.setTimeout(() => {
      if (!deleting && length < word.length) {
        setLength(length + 1);
      } else if (!deleting) {
        setDeleting(true);
      } else if (length > 0) {
        setLength(length - 1);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [length, deleting, word, words.length, typeMs, deleteMs, pauseMs]);

  return word.slice(0, length);
}
