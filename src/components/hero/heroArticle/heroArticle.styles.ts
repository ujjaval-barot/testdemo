import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 648px;
  border-bottom: 1px solid ${props => props.theme.colors.darkGrey};

  ${({theme}) => theme.media.maxTablet} {
    height: auto;
  }
`;

export const GenericHeroWithImage = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 60px;
  font-family: ${props => props.theme.typography.primaryFontFamily};

  ${({theme}) => theme.media.maxTablet} {
    width: 100%;
    padding: 30px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  width: 35%;
  border-right: 1px solid ${({theme}) => theme.colors.darkGrey};
  align-items: center;
  justify-content: center;
  position: relative;

  ${({theme}) => theme.media.maxTablet} {
    width: 100%;
    height: 300px;
  }
`;

export const HeroTitle = styled.h1`
  width: 90%;
  font-size: ${props => props.theme.typography.fontSize.extraHuge}px;
  font-weight: ${props => props.theme.typography.fontWeight.regular};
  margin-top: 0px;
  margin-bottom: 15px;

  ${({theme}) => theme.media.maxTablet} {
    width: 95%;
    font-size: ${props => props.theme.typography.fontSize.extraLarge}px;
    line-height: 36px;
    margin-top: 0px;
  }
`;

export const Description = styled.p`
  width: 100%;
  line-height: 24px;
  font-size: ${props => props.theme.typography.fontSize.small}px;
  font-weight: ${props => props.theme.typography.fontWeight.semiThin};
  margin-bottom: 30px;
  font-family: ${props => props.theme.typography.secondaryFontFamily};
`;

export const DateHero = styled.p`
  text-transform: uppercase;
  font-size: ${props => props.theme.typography.fontSize.tiny}px;
  font-weight: ${props => props.theme.typography.fontWeight.semiBold};
  margin-bottom: 60px;
`;

export const AuthorHeader = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  font-weight: ${({theme}) => theme.typography.fontWeight.bold};
  margin: 0;
`;

export const AuthorText = styled.div`
  margin: 0;
  padding: 0;

  p {
    font-family: ${({theme}) => theme.typography.secondaryFontFamily};
    font-size: ${({theme}) => theme.typography.fontSize.small}px;
    font-weight: ${({theme}) => theme.typography.fontWeight.semiThin};
    line-height: ${({theme}) => theme.typography.lineHeight.medium}px;
    margin: 0;
  }
`;
