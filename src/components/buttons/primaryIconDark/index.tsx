import React from 'react';

import {PrimaryButtonDark, PrimaryButtonImage} from './primaryIconDark.styles';

interface ChildrenProps {
  children: any;
  props?: any;
}

export const PrimaryIconButtonDark: React.FC<ChildrenProps> = ({children, props}) => {
  return (
    <PrimaryButtonDark {...props}>
      {children} &nbsp;
      <PrimaryButtonImage src={'/icons/ArrowRight12.svg'} />
    </PrimaryButtonDark>
  );
};
