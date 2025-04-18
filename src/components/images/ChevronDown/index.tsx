import React from 'react';

import {ChevronDownContainer} from './ChevronDown.styles';

interface Props {
  className?: string;
}

export const ChevronDownIcon: React.FC<Props> = ({className}): JSX.Element => {
  return (
    <ChevronDownContainer className={className}>
      <svg viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 0.999997L7 7L1 0.999996" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </ChevronDownContainer>
  );
};
