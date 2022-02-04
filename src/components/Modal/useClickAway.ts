import { useEffect, useRef } from 'react';

export const useClickAway = (awayEvent: () => void, dep?: any[]) => {
  const ref = useRef<HTMLElement>(null);
  const callback = (e: MouseEvent) => {
    const element = ref.current;
    if (!element) {
      return;
    }
    if (!element.contains(e.target as Node)) {
      awayEvent();
    }
  };
  useEffect(
    () => {
      document.body.addEventListener('click', callback);
      return () => document.body.removeEventListener('click', callback);
    },
    dep ? [...dep] : [],
  );
  return ref;
};
