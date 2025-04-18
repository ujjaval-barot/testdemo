import styled, {css} from 'styled-components';

interface MobileDropdownProps {
  readonly mainDropdown: boolean;
}

interface MobileProductDropdownProps {
  readonly productDropdown: boolean;
}

export const NavWrapper = styled.div`
  display: flex;
  height: 70px;
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.small};
  font-weight: ${({theme}) => theme.typography.fontWeight.bold};
  border-bottom: 1px solid ${({theme}) => theme.colors.darkGrey};
  width: 100%;
  color: ${({theme}) => theme.colors.darkGrey};

  ${({theme}) => theme.media.maxTablet} {
    height: 80px;
    border-bottom: none;
  }
`;

export const DropdownBlock = styled.div`
  background: ${({theme}) => theme.colors.darkGrey};
  position: absolute;
  height: 320px;
  width: 608px;
  pointer-events: none;
  display: flex;
  color: white;
  z-index: 9999;
  top: 67px;
  left: -1px;
  right: 0;
  opacity: 0;
  transition: opacity ${({theme}) => theme.utils.timing.fast};
  padding: 50px;
`;

export const DropdownColumn = styled.div`
  flex: 0 1 200px;
  text-align: left;

  &:not(:last-child) {
    margin-right: 40px;
  }
`;

export const NestedMenuBack = styled.div`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.larger}px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  p {
    margin: 0 0 0 8px;
  }
`;

export const MenuTitle = styled.div`
  font-family: ${({theme}) => theme.typography.primaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.tiny}px;
  border: none;
  text-align: left;
  background: ${({theme}) => theme.colors.darkGrey};
  color: ${({theme}) => theme.colors.grey2};
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const MenuSubtitle = styled.a`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  border: none;
  background: ${({theme}) => theme.colors.darkGrey};
  color: ${({theme}) => theme.colors.white};
  text-align: left;
  display: block;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

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

  ${({theme}) => theme.media.maxTablet} {
    font-size: ${({theme}) => theme.typography.fontSize.larger}px;
    margin: 0;
  }
`;

export const MobileMenu = styled.div`
  padding: 0 60px;
`;

export const MobileNestedList = styled.div<MobileProductDropdownProps>`
  opacity: 0;
  visibility: hidden;

  ${({theme}) => theme.media.maxTablet} {
    background: ${({theme}) => theme.colors.darkGrey};
    position: fixed;
    height: 764px;
    width: 85%;
    color: white;
    top: 80px;
    align-items: center;
    font-size: ${({theme}) => theme.typography.fontSize.larger};
    z-index: ${props => (props.productDropdown ? 99999 : 1)};
    padding-top: 20px;
    padding-left: 10px;
    left: 0;
    margin-left: 7%;
    ${({theme}) => css`
      transition: opacity ${theme.utils.timing.fast}, visibility ${theme.utils.timing.fast} ${theme.utils.timing.fast};
    `}

    ${({productDropdown, theme}) =>
      productDropdown &&
      css`
        opacity: 1;
        visibility: visible;
        transition: opacity ${theme.utils.timing.fast}, visibility ${theme.utils.timing.fast};
      `}
  }

  ${({theme}) => theme.media.phone} {
    width: 80%;
    margin-left: 10%;
  }
`;

export const MobileDropdownBlock = styled(MobileMenu)<MobileDropdownProps>`
  display: none;

  ${({theme}) => theme.media.maxTablet} {
    background: ${({theme}) => theme.colors.darkGrey};
    position: absolute;
    height: 764px;
    width: 100%;
    color: white;
    top: 80px;
    align-items: center;
    font-size: ${({theme}) => theme.typography.fontSize.larger};
    z-index: ${props => (props.mainDropdown ? 99999 : 1)};
    display: ${props => (props.mainDropdown ? 'block' : 'none')};
  }
`;

export const MobileColumn = styled.div`
  :not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const MobileOption = styled.a`
  background: ${({theme}) => theme.colors.darkGrey};
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.typography.fontSize.larger}px;
  padding: 40px 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: static;

  :not(:last-child) {
    border-bottom: 1px solid ${({theme}) => theme.colors.white};
  }
`;

export const MobileChevronRight = styled.div`
  background-image: url('/img/right.svg');
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  margin-left: auto;
`;

export const MobileChevronLeft = styled.div`
  background-image: url('/img/right.svg');
  background-position: center;
  background-size: contain;
  width: 24px;
  height: 24px;
  transform: rotate(180deg);
  background-repeat: no-repeat;
  margin-left: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

export const Hamburger = styled.div<MobileDropdownProps>`
  background-image: url('/img/mobile-nav-open.svg');
  background-position: center;
  width: 22px;
  height: 22px;
  background-repeat: no-repeat;
  margin-right: 10%;
  cursor: pointer;
  display: none;

  ${({theme}) => theme.media.maxTablet} {
    display: flex;
    background-image: ${props =>
      props.mainDropdown ? 'url("/img/mobile-nav-close.svg")' : 'url("/img/mobile-nav-open.svg")'};
  }
`;

export const BigWrapper = styled.div<MobileDropdownProps>`
  width: 44.44%;
  display: flex;
  height: 100%;
  align-items: center;

  ${({theme}) => theme.media.maxTablet} {
    width: 100%;
    position: relative;
    justify-content: space-between;
    background: ${props => (props.mainDropdown ? ({theme}) => theme.colors.darkGrey : ({theme}) => theme.colors.white)};
  }
`;

export const DesktopChevron = styled.div`
  background-image: url('/img/down.svg');
  width: 20px;
  height: 8px;
  background-repeat: no-repeat;
  margin-left: auto;
`;

export const LinkWrapper = styled.div`
  width: 220px;
  height: 100%;

  ${({theme}) => theme.media.maxTablet} {
    display: none;
  }
`;

export const SmallWrapper = styled.div<{dropdownWrapper?: boolean}>`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  border-left: 1px solid ${({theme}) => theme.colors.darkGrey};
  cursor: pointer;
  padding-left: 20px;
  transition: background ${({theme}) => theme.utils.timing.fast};

  &:hover {
    background: #f1f8ff;
  }

  &:active {
    background: ${({theme}) => theme.colors.darkGrey};
    color: ${({theme}) => theme.colors.white};
  }

  ${({dropdownWrapper = false, theme}) =>
    dropdownWrapper &&
    css`
      &:hover {
        background: ${theme.colors.darkGrey};
        color: ${theme.colors.white};

        ${DropdownBlock} {
          opacity: 1;
          pointer-events: inherit;
        }

        ${DesktopChevron} {
          background-image: url('/img/up.svg');
        }
      }
    `}

  ${({theme}) => theme.media.maxTablet} {
    display: none;
  }

  ${({theme}) => theme.media.maxTablet} {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100%;
  border-left: 1px solid ${({theme}) => theme.colors.darkGrey};

  ${({theme}) => theme.media.maxTablet} {
    display: none;
  }
`;

export const NavMainLogo = styled.a<MobileDropdownProps>`
  background-image: url('/img/Logo.svg');
  background-position: center left;
  width: 200px;
  height: 100%;
  background-repeat: no-repeat;
  transition: opacity ${({theme}) => theme.utils.timing.fast};

  :hover {
    opacity: 0.4;
  }

  ${({theme}) => theme.media.maxTablet} {
    margin-left: 6%;
    width: 124px;
    background-position: center;
    background-size: contain;
    background-image: ${props => (props.mainDropdown ? 'url("/img/logoWhite.svg")' : 'url("/img/Logo.svg")')};
  }
`;

export const InnerText = styled.div`
  margin: 0 5px;
`;

export const IconContainer = styled.div`
  margin: auto;
  height: auto;
  margin: 0 5px;
`;

export const NavButtonStyle = styled.button`
  border: 1px solid ${({theme}) => theme.colors.white};
  box-sizing: border-box;
  border-radius: 100px;
  background: ${({theme}) => theme.colors.darkGrey};
  transition: ${({theme}) => theme.utils.timing.fast};
  width: 134px;
  height: 48px;
  color: white;
  margin-left: 27px;

  &:hover {
    background: ${({theme}) => theme.colors.blue};
    cursor: pointer;
    color: ${({theme}) => theme.colors.white};
    border: 1px solid ${({theme}) => theme.colors.blue};
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: ${({theme}) => theme.typography.fontSize.small}px;
    font-weight: ${({theme}) => theme.typography.fontWeight.bold};
  }
`;
