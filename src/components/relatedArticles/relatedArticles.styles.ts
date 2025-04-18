import styled from 'styled-components';

export const RelatedArticleContainer = styled.div`
  width: 100%;
  height: auto;
  display: inline-block;
  font-family: ${({theme}) => theme.typography.primaryFontFamily};
  border-bottom: 1px solid ${({theme}) => theme.colors.darkGrey};
  margin-bottom: 60px;

  ${({theme}) => theme.media.maxTablet} {
    margin-bottom: 120px;
    :first-child {
      margin-top: 60px;
    }
  }

  ${({theme}) => theme.media.phone} {
    border-bottom: none;
  }

  ${({theme}) => theme.media.desktop} {
    padding-bottom: 60px;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 0px;
`;

export const TitleButtonContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px;
  vertical-align: middle;

  ${({theme}) => theme.media.phone} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TitleStyle = styled.h3`
  height: fit-content;
  margin-top: 10px;

  ${({theme}) => theme.media.phone} {
    margin-bottom: 30px;
    margin-top: 0;
  }
`;

export const DateStyle = styled.p`
  font-size: ${({theme}) => theme.typography.fontSize.tiny}px;
  font-weight: ${props => props.theme.typography.fontWeight.regular};
  margin: 0;
`;

export const DateContainer = styled.div`
  display: inline-block;
  height: auto;
  margin-bottom: 10px;
  margin-top: 0px;

  ${({theme}) => theme.media.phone} {
    display: none;
  }
`;

export const ReadMoreLink = styled.a`
  ${({theme}) => theme.media.tablet} {
    flex: 0 0 137px;
    margin-left: 30px;
  }
`;
