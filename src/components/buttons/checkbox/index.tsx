import React from 'react';

import {FlexContainer, CheckboxInput, Label} from './checkbox.styles';

interface ChildrenProps {
  children: any;
  props?: any;
}

export const Checkbox: React.FC<ChildrenProps> = ({children, props}) => {
  return (
    <FlexContainer>
      <CheckboxInput {...props} />
      <Label>{children}</Label>
    </FlexContainer>
  );
};
