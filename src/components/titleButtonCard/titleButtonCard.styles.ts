import styled from 'styled-components';

export const TitleButtonContainer = styled.div<{backgroundBlue: boolean}>`
  width: 100%;
  height: auto;
  display: inline-block;
  background: ${props =>
    props.backgroundBlue ? ({theme}) => theme.colors.lightBlue : ({theme}) => theme.colors.white};

  ${({theme}) => theme.media.maxTablet} {
    height: auto;
  }
`;

export const ContentContainer = styled.div<{extraPadding: boolean}>`
  width: ${({extraPadding}) => (extraPadding ? '30%' : '86%')};
  height: auto;
  margin: 100px auto 120px auto;

  ${({theme}) => theme.media.maxTablet} {
    width: 85%;
    margin: 65px auto;
  }
`;

export const TitleContainer = styled.div<{extraPadding: boolean}>`
  width: ${({extraPadding}) => (extraPadding ? '100%' : '80%')};
  height: auto;
  margin-bottom: 0px;

  ${({theme}) => theme.media.maxTablet} {
    width: 100%;
  }
`;

export const SubtitleContainer = styled.div<{extraPadding: boolean}>`
  width: ${({extraPadding}) => (extraPadding ? '100%' : '65%')};
  height: auto;
  margin-top: 15px;

  ${({theme}) => theme.media.maxTablet} {
    width: 80%;
  }
`;

export const Title = styled.p<{titleCard: boolean}>`
  font-family: ${({theme}) => theme.typography.primaryFontFamily};
  font-size: ${props =>
    props.titleCard ? `${props.theme.typography.fontSize.extraHuge}px` : `${props.theme.typography.fontSize.huge}px`};
  font-weight: ${({theme}) => theme.typography.fontWeight.regular};
  margin: 0;

  ${({theme}) => theme.media.maxTablet} {
    font-size: ${({theme}) => theme.typography.fontSize.extraLarge}px;
  }
`;

export const Subtitle = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  font-weight: ${({theme}) => theme.typography.fontWeight.semiThin};
`;

export const SubtitleLink = styled.a`
  text-decoration: underline;

  &:hover {
    color: ${({theme}) => theme.colors.blue};
  }
`;

export const ButtonContainer = styled.div<{extraPadding: boolean}>`
  width: ${({extraPadding}) => (extraPadding ? '40%' : '20%')};
  height: auto;
  margin-top: 30px;

  ${({theme}) => theme.media.maxTablet} {
    width: 60%;
  }
`;
