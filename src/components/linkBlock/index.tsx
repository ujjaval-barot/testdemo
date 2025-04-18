import React from 'react';
import Link from 'next/link';

import {
  LinkBlockCardContainer,
  TitleContainer,
  ButtonContainer,
  Title,
  LinkBlockCardWrap,
  StyledChevron,
} from './linkBlockCard.styles';

interface TrialCardProps {
  title: string;
  url: string;
}

export const LinkBlockCard: React.FC<TrialCardProps> = props => {
  return (
    <LinkBlockCardContainer>
      <LinkBlockCardWrap>
        <Link href={props.url}>
          <a>
            <TitleContainer>
              <Title>{props.title}</Title>
            </TitleContainer>
            <ButtonContainer>
              <StyledChevron />
            </ButtonContainer>
          </a>
        </Link>
      </LinkBlockCardWrap>
    </LinkBlockCardContainer>
  );
};
