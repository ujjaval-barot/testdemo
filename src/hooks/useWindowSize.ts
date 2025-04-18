import {useState, useEffect} from 'react';
import {WINDOW_SIZES} from 'theme/media-queries';
import {theme} from 'theme';

interface WindowSizes {
  width: number;
  height: number;
  headerHeight: number;
}

export const useWindowSize = (): {windowSizes: WindowSizes; isMobile: boolean} => {
  const [windowSizes, setWindowSize] = useState<WindowSizes>({
    width: 1200,
    height: 800,
    headerHeight: 0,
  });
  const isMobile = windowSizes.width < WINDOW_SIZES.tablet;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
          headerHeight: window.innerWidth >= WINDOW_SIZES.largeDesktop ? theme.utils.headerHeight : 0,
        } as any);
      }

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return {windowSizes, isMobile};
};
