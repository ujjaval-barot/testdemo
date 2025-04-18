import styled from 'styled-components';
import {WINDOW_SIZES} from 'theme/media-queries';

export const TitleSiteWrap = styled.div`
  max-width: ${WINDOW_SIZES.giantDesktop}px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding: 0 120px;
  align-items: start;
  margin: 60px auto;

  ${({theme}) => theme.media.maxTablet} {
    padding: 0 30px;
    margin: 30px auto 0 auto;

    button {
      display: none;
    }
  }
`;

export const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  justify-content: space-between;

  ${({theme}) => theme.media.maxTablet} {
    flex-direction: column;
    gap: 12px;
    button {
      display: none;
    }
  }
`;

export const BackToAllButton = styled.a`
  font-family: ${({theme}) => theme.typography.primaryFontFamily};
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 20.8px */
`;

export const Results = styled.div`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  display: flex;
  margin-top: 16px;
  font-size: 20px;
  font-style: normal;
  line-height: 140%; /* 28px */
`;
