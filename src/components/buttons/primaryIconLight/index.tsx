import React from 'react';

import {PrimaryButtonLight, PrimaryButtonImage} from './primaryIconLight.styles';

interface ChildrenProps {
  children: any;
  props?: any;
}

export const PrimaryIconButtonLight: React.FC<ChildrenProps> = ({children, props}) => {
  return (
    <PrimaryButtonLight {...props}>
      {children} &nbsp;
      <PrimaryButtonImage src={'/icons/ArrowRightDark.svg'} />
    </PrimaryButtonLight>
  );
};
