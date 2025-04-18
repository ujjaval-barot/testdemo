import styled from 'styled-components';
import {WINDOW_SIZES} from 'theme/media-queries';

export const ArticleBodyContainer = styled.div`
  max-width: 940px;
  width: 100%;
  margin: 0px auto;

  p {
    font-size: ${({theme}) => theme.typography.fontSize.small}px;
    font-family: ${({theme}) => theme.typography.secondaryFontFamily};
    font-weight: ${({theme}) => theme.typography.fontWeight.semiThin};
    line-height: 26px;

    > & {
      width: 80%;
    }

    a {
      color: ${({theme}) => theme.colors.blue};
    }
  }

  img {
    width: 100%;
    height: 427px;
    margin-top: 20px;
  }

  ${({theme}) => theme.media.maxTablet} {
    width: 100%;

    > p {
      width: 90%;
      margin: 0 auto;
    }

    h1 {
      width: 90%;
      margin: 60px auto 10px auto;
    }

    h3 {
      width: 90%;
      margin: 80px auto 60px auto;
    }

    img {
      height: 284px;
      margin: 10px 0px;
    }
  }
  ${({theme}) => theme.media.desktop} {
    h3,
    h4 {
      margin-bottom: 30px;
    }
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: auto;
  display: inline-block;

  ${({theme}) => theme.media.desktop} {
    width: ${WINDOW_SIZES.giantDesktop}px;
    transform: translateX(-120px);
    border-top: 1px solid ${({theme}) => theme.colors.darkGrey};
  }
`;

export const FooterInfoContainer = styled.div`
  max-width: 940px;
  width: 100%;
  height: auto;
  margin: auto;

  ${({theme}) => theme.media.maxTablet} {
    width: 100%;
    height: auto;
    margin: 0px auto;
  }
`;

export const FooterInfo = styled.div`
  padding: 60px 80px 60px 0px;
  font-size: ${({theme}) => theme.typography.fontSize.tiny}px;
  font-weight: ${({theme}) => theme.typography.fontWeight.regular};
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};

  ${({theme}) => theme.media.maxTablet} {
    padding: 50px 20px;
  }
`;

export const ArticleContainer = styled.div`
  width: 100%;
  padding-top: 80px;

  ${({theme}) => theme.media.maxTablet} {
    padding-top: 30px;
  }
`;
