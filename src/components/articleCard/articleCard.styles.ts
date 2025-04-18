import styled from 'styled-components';

export const ArticleCardContainer = styled.div`
  font-family: ${({theme}) => theme.typography.primaryFontFamily};
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.white};

  ${({theme}) => theme.media.maxTablet} {
    width: 100%;
    height: auto;
  }

  ${({theme}) => theme.media.desktop} {
    border: 1px solid ${({theme}) => theme.colors.darkGrey};
    border-top: none;

    :nth-child(even) {
      border-left: none;
    }
  }
`;

export const ImageContainer = styled.div<{showImg: boolean}>`
  width: 100%;
  height: 240px;
  position: relative;
  z-index: 1;

  ${({theme}) => theme.media.maxTablet} {
    width: calc(100% - 20px);
    height: 210px;
    display: ${({showImg}) => (showImg ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    margin: 10px 10px 0 10px;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  flex: 1;
`;

export const InfoContainer = styled.div`
  padding: 60px 120px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({theme}) => theme.media.maxTablet} {
    padding: 30px 20px 60px;
  }
`;
export const TitleArticle = styled.h2`
  margin-top: 0;

  ${({theme}) => theme.media.maxTablet} {
    font-size: ${({theme}) => theme.typography.fontSize.larger}px;
  }
`;

export const DateArticle = styled.p`
  font-size: ${({theme}) => theme.typography.fontSize.tiny}px;
  text-transform: uppercase;
  margin: 15px 0 100px;

  ${({theme}) => theme.media.maxTablet} {
    margin: 15px 0 30px;
  }
`;

export const ButtonArticleContainer = styled.div`
  width: auto;
  height: auto;
  margin-top: auto;
`;
