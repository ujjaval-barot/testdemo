import React from 'react';

import {SectionTitleContainer, SectionTitleStyle} from './sectionTitle.styles';

interface Props {
  title?: string;
}

export const SectionTitle: React.FC<Props> = props => {
  return (
    <SectionTitleContainer>
      <SectionTitleStyle>{props.title ?? props.children}</SectionTitleStyle>
    </SectionTitleContainer>
  );
};
