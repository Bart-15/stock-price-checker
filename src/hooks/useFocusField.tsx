import { useEffect, useRef } from 'react';

export function useFocusField() {
  const textFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus the TextField when the component mounts
    if (textFieldRef.current) {
      textFieldRef.current.focus();
    }
  }, []);

  return textFieldRef;
}
