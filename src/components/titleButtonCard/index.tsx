import React from 'react';

import {
  TitleButtonContainer,
  ContentContainer,
  Title,
  TitleContainer,
  SubtitleContainer,
  Subtitle,
  ButtonContainer,
} from './titleButtonCard.styles';

import {PrimaryButtonLight} from 'components/buttons/primaryLight';
import {PrimaryButtonDark} from 'components/buttons/primaryDark';

interface HeroTitleInterface {
  title: string;
  subtitle?: string;
  ctas?: {
    text: string;
    link: string;
  };
  extraHorizontalPadding?: boolean;
  blueBackground?: boolean;
}

export const TitleButtonCard: React.FC<HeroTitleInterface> = ({
  title,
  subtitle,
  ctas,
  extraHorizontalPadding = false,
  blueBackground = false,
}) => {
  return (
    <TitleButtonContainer backgroundBlue={blueBackground}>
      <ContentContainer extraPadding={extraHorizontalPadding}>
        <TitleContainer extraPadding={extraHorizontalPadding}>
          <Title titleCard={ctas === null}>{title}</Title>
        </TitleContainer>
        {subtitle && (
          <SubtitleContainer extraPadding={extraHorizontalPadding}>
            <Subtitle>{subtitle}</Subtitle>
          </SubtitleContainer>
        )}
        {ctas && (
          <ButtonContainer extraPadding={extraHorizontalPadding}>
            <a href={ctas?.link}>
              {blueBackground ? (
                <PrimaryButtonDark>{ctas?.text}</PrimaryButtonDark>
              ) : (
                <PrimaryButtonLight>{ctas?.text}</PrimaryButtonLight>
              )}
            </a>
          </ButtonContainer>
        )}
      </ContentContainer>
    </TitleButtonContainer>
  );
};
