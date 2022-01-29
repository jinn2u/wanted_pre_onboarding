import { useEffect, useRef } from 'react';

export const useClickAway = (awayEvent: () => void) => {
  const ref = useRef<HTMLElement>(null);
  const callback = (e: any) => {
    const element = ref.current;
    if (!element) {
      return;
    }
    if (!element.contains(e.target)) {
      awayEvent();
    }
  };
  useEffect(() => {
    document.body.addEventListener('click', callback);
    return () => document.body.removeEventListener('click', callback);
  }, []);
  return ref;
};
