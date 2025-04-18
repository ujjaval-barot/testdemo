import {useCallback} from 'react';

export default function useScrollLock(): (val: boolean) => void {
  const setScrollLock = useCallback((val: boolean) => {
    if (val) {
      document.body.style.overflowY = 'hidden';
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
      document.documentElement.style.overflowY = '';
    }
  }, []);

  return setScrollLock;
}
