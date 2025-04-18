import React from 'react';
import {useWindowSize} from 'hooks/useWindowSize';
import {WINDOW_SIZES} from 'theme/media-queries';

export const Desktop: React.FC = ({children}): JSX.Element | null => {
  const {windowSizes} = useWindowSize();
  if (windowSizes.width < WINDOW_SIZES.desktop) return null;

  return <React.Fragment>{children}</React.Fragment>;
};

export const Mobile: React.FC = ({children}): JSX.Element | null => {
  const {windowSizes} = useWindowSize();
  if (windowSizes.width >= WINDOW_SIZES.desktop) return null;

  return <React.Fragment>{children}</React.Fragment>;
};

export const Phone: React.FC = ({children}): JSX.Element | null => {
  const {windowSizes} = useWindowSize();
  if (windowSizes.width >= WINDOW_SIZES.tablet) return null;

  return <React.Fragment>{children}</React.Fragment>;
};

export const MinTablet: React.FC = ({children}): JSX.Element | null => {
  const {windowSizes} = useWindowSize();
  if (windowSizes.width < WINDOW_SIZES.tablet) return null;

  return <React.Fragment>{children}</React.Fragment>;
};

export const MaxLargeDesktop: React.FC = ({children}): JSX.Element | null => {
  const {windowSizes} = useWindowSize();
  if (windowSizes.width >= WINDOW_SIZES.largeDesktop) return null;

  return <React.Fragment>{children}</React.Fragment>;
};

export const MinLargeDesktop: React.FC = ({children}): JSX.Element | null => {
  const {windowSizes} = useWindowSize();
  if (windowSizes.width < WINDOW_SIZES.largeDesktop) return null;

  return <React.Fragment>{children}</React.Fragment>;
};
