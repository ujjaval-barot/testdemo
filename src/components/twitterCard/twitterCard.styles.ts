import TwitterLogo from 'components/icons/twitter';
import styled from 'styled-components';

export const CardContainer = styled.div`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  display: inline-block;
  width: 100%;
  flex-direction: column;
  border-radius: 10px;
  color: ${({theme}) => theme.colors.darkGrey};
  white-space: normal;
  flex: 0 0 calc(100% - 130px);
  padding: 0 65px;
  margin: 0 65px;

  ${({theme}) => theme.media.maxTablet} {
    background: ${({theme}) => theme.colors.lightGrey};
    flex: 0 0 254px;
    min-height: 324px;
    padding: 0;
    margin: 0;

    :not(:last-child) {
      margin-right: 15px;
    }
  }
`;

export const LogoContainer = styled.div`
  width: 100%;

  ${({theme}) => theme.media.maxTablet} {
    padding: 48px 0 0 10px;
  }
`;

export const PartnersContainer = styled.div`
  width: 100%;

  ${({theme}) => theme.media.maxTablet} {
    padding: 16px 0 0 10px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  padding-top: 16px;

  ${({theme}) => theme.media.maxTablet} {
    height: 47%;
    padding: 0 0 0 10px;
  }
`;

export const DateContainer = styled.div`
  width: 100%;
  margin-top: 15px;

  ${({theme}) => theme.media.maxTablet} {
    padding: 40px 0 0 10px;
  }
`;

export const ImageTwitter = styled(TwitterLogo)`
  width: 29px;
  height: 24px;
  margin-bottom: 15px;
`;

export const PartnersStyle = styled.a`
  display: inline;
  font-family: ${({theme}) => theme.typography.primaryFontFamily};
  font-weight: ${props => props.theme.typography.fontWeight.semiThin};
  color: ${({theme}) => theme.colors.darkGrey};
  font-size: 30px;
  line-height: 120%;

  ${({theme}) => theme.media.maxTablet} {
    font-size: ${props => props.theme.typography.fontSize.larger}px;
  }

  &:link {
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
    color: ${({theme}) => theme.colors.darkGrey};
  }

  &:hover {
    color: ${({theme}) => theme.colors.blue};
  }
`;

export const ContentStyle = styled.div`
  display: inline;
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-weight: ${props => props.theme.typography.fontWeight.semiThin};
  font-size: ${props => props.theme.typography.fontSize.small}px;
  line-height: 150%;
`;

export const DateStyle = styled.h3`
  display: inline;
  font-family: ${({theme}) => theme.typography.primaryFontFamily};
  font-weight: ${props => props.theme.typography.fontWeight.semiThin};
  font-size: ${props => props.theme.typography.fontSize.tiny}px;
  line-height: 120%;
`;
