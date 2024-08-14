import { useEffect, useRef } from 'react';

// Note: This custom hook mimic the behavior of componentDidMount from class components
export function useDidMountEffect(effect: () => any, deps: Array<any>) {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      return effect();
    } else {
      didMount.current = true;
    }
  }, deps);
}
