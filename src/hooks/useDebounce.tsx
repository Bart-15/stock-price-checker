import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, timeout: number = 1000) {
  const [state, setState] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setState(value), timeout);

    return () => clearTimeout(handler);
  }, [value, timeout]);

  return state;
}
