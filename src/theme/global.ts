import {normalize} from 'polished';
import {createGlobalStyle} from './';

export const GlobalStyle = createGlobalStyle<{scrollLocked?: boolean}>`
  ${normalize()}
  
  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({theme}) => theme.typography.primaryFontFamily};
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color ${({theme}) => theme.utils.timing.fast};

    :visited {
      color: inherit;
    }

    :hover {
      color: ${({theme}) => theme.colors.blue};
    }
  }

  h1 {
    font-weight: ${({theme}) => theme.typography.fontWeight.regular};
    font-size: ${({theme}) => theme.typography.fontSize.extraHuge}px;
    width: 100%;
  }

  h2 {
    font-weight: ${({theme}) => theme.typography.fontWeight.regular};
    font-size: ${({theme}) => theme.typography.fontSize.huge}px;
    letter-spacing: -1%;
    width: 100%;
  }

  h3 {
    font-weight: ${({theme}) => theme.typography.fontWeight.regular};
    line-height: ${({theme}) => theme.typography.lineHeight.large}px;
    font-size: ${({theme}) => theme.typography.fontSize.extraLarge}px;
    width: 100%;
  }

  h4 {
    font-weight: ${({theme}) => theme.typography.fontWeight.regular};
    line-height: ${({theme}) => theme.typography.lineHeight.large}px;
    font-size: ${({theme}) => theme.typography.fontSize.larger}px;
    letter-spacing: 0%;
    width: 100%;
  }

  h5 {
    font-family: ${({theme}) => theme.typography.secondaryFontFamily};
    font-weight: ${({theme}) => theme.typography.fontWeight.regular};
    font-size: ${({theme}) => theme.typography.fontSize.tiny}px;
    width: 100%;
    margin-bottom: 60px;
  }

  h6 {
    font-family: ${({theme}) => theme.typography.secondaryFontFamily};
    font-weight: ${({theme}) => theme.typography.fontWeight.bold};
    font-size: ${({theme}) => theme.typography.fontSize.large}px;
    margin-bottom: 60px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 30px;
    margin-bottom: 15px;
  }

  blockquote {
    width: 100%;
    background: ${({theme}) => theme.colors.lightBlue};
    margin: 50px auto;
    padding: 30px 30px 30px 65px;
    border-left: 1px solid ${({theme}) => theme.colors.darkGrey};
    font-size: ${({theme}) => theme.typography.fontSize.large}px;
    font-weight: ${({theme}) => theme.typography.fontWeight.semiThin};
    font-family: ${({theme}) => theme.typography.secondaryFontFamily};
    position: relative;

    ::before {
      content: '“';
      font-size: 50px;
      line-height: 28px;
      vertical-align: top;
      padding-right: 10px;
      position: absolute;
      top: 40px;
      left: 30px;
    }

    > p {
      margin: 0;

      & + & {
        margin-top: 16px;
      }
    }

    ${({theme}) => theme.media.phone} {
      border-left: none;
      transform: translateX(-30px);
      width: calc(100% + 60px);
    }
  }
`;
