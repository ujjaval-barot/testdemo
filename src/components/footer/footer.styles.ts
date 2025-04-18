import styled from 'styled-components';

export const FooterStyle = styled.div`
  width: 100%;
  background: #1f1f1f;
  font-family: ${({theme}) => theme.typography.primaryFontFamily};
  font-style: normal;
  font-weight: 400;
  padding: 60px 0;

  ${({theme}) => theme.media.maxTablet} {
    padding: 60px 0;
  }
`;

export const FooterLogoDiv = styled.div`
  width: 100%;
  margin-bottom: 68px;

  ${({theme}) => theme.media.maxTablet} {
    margin-bottom: 43px;
  }
`;

export const FooterTitleStyle = styled.div`
  width: 100%;
  font-size: 12px;
  line-height: 14.4px;
  font-weight: 700;
  color: #c4c4c4;
  text-transform: uppercase;
`;

export const LowerBlock = styled.div``;

export const LowerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 20.8%;
  grid-template-rows: repeat(2, 1fr);

  > ${LowerBlock} {
    :nth-child(-n + 2) {
      ${FooterTitleStyle} {
        margin-bottom: 15px;
      }
    }
    :nth-child(n + 3) {
      ${FooterTitleStyle} {
        margin-bottom: 5px;
      }
    }
  }

  ${({theme}) => theme.media.tablet} {
    row-gap: 43px;
  }

  ${({theme}) => theme.media.maxTablet} {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    > ${LowerBlock} {
      :nth-child(-n + 2) {
        flex: 0 0 50%;

        ${FooterTitleStyle} {
          margin-bottom: 27.5px;
        }
      }
      :nth-child(n + 3) {
        flex: 0 0 100%;
      }
    }
  }
`;

export const FooterLogoMargin = styled.div`
  margin-top: 60px;
  margin-left: 8.333%;
`;

export const FooterTitleBottomStyle = styled.div`
  width: 100%;
  font-size: 12px;
  line-height: 120%;
  margin-top: 55px;
  color: #c4c4c4;

  @media (max-width: 768px) {
    margin-top: 64px;
  }
`;

export const FooterSubtitleStyle = styled.div`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  width: 100%;
  font-size: 16px;
  line-height: 150%;
  color: #c4c4c4;
  margin-bottom: 15px;

  p:first-child {
    margin-top: 0;

    ${({theme}) => theme.media.maxTablet} {
      width: 72.5%;
    }
  }
`;

export const FooterLinkStyle = styled.div`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  margin-bottom: 15px;
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  color: #f8f8f8;

  ${({theme}) => theme.media.maxTablet} {
    margin-bottom: 24px;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

export const SocialLinkWrapper = styled.div`
  margin-top: 16px;

  ${({theme}) => theme.media.maxTablet} {
    margin-top: 30px;
    margin-bottom: 20px;
    padding-bottom: 25.5px;
    border-bottom: 1px solid ${({theme}) => theme.colors.white};
  }
`;

export const LinkStyle = styled.a`
  display: inline;
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  color: ${({theme}) => theme.colors.white};
  margin-right: 16px;

  &:link {
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
  }

  &:hover {
    color: ${({theme}) => theme.colors.blue};
  }
`;

export const FooterDivStyle = styled.div`
  display: block;
`;

export const FooterLogoStyle = styled.div`
  height: 30px;
`;
