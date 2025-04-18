import React from 'react';

import {CloseIconContainer} from './closeIcon.styles';

export const CloseIcon: React.FC = (): JSX.Element => {
  return (
    <CloseIconContainer>
      <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2.5L10 10.5" stroke="#1F1F1F" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 10.5L10 2.5" stroke="#1F1F1F" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </CloseIconContainer>
  );
};
