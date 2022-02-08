import { useEffect, useMemo } from 'react';

export const useCreateElement = (className?: string) => {
  const el = useMemo(() => {
    const $el = document.createElement('div');
    className && ($el.className = className);
    return $el;
  }, []);

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  });
  return el;
};
