import React from 'react';

import {FlexContainer, RadioInput, Label} from './radio.styles';

interface ChildrenProps {
  children: any;
  props?: any;
}

export const RadioButton: React.FC<ChildrenProps> = ({children, props}) => {
  return (
    <FlexContainer>
      <RadioInput {...props} />
      <Label>{children}</Label>
    </FlexContainer>
  );
};
