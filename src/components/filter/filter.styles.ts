import {ChevronDownIcon} from 'components/images/ChevronDown';
import styled, {css} from 'styled-components';

export const BarWrapper = styled.div`
  width: 100%;
  height: 172px;

  ${({theme}) => theme.media.phone} {
    height: auto;
  }
`;

export const InsideWrapper = styled.div`
  height: 100%;
  display: flex;
  padding: 0 120px;
  justify-content: space-between;
  align-items: center;

  ${({theme}) => theme.media.phone} {
    width: 100%;
    display: block;
    justify-content: center;
    padding: 30px;
  }
`;

export const InsideWrapperTag = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding-bottom: 60px;
`;

export const Title = styled.p`
  font-family: ${({theme}) => theme.typography.primaryFontFamily};
  font-size: 52px;
  font-weight: ${props => props.theme.typography.fontWeight.regular};

  ${({theme}) => theme.media.phone} {
    text-align: center;
    font-size: 36px;
  }
`;

export const TagWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({theme}) => theme.colors.darkGrey};

  ${({theme}) => theme.media.phone} {
    display: none;
  }
`;

export const Menu = styled.div<{show?: boolean}>`
  pointer-events: none;
  display: inline-block;
  opacity: 0;
  position: absolute;
  background: ${({theme}) => theme.colors.darkGrey};
  border: 1px solid ${({theme}) => theme.colors.darkGrey};
  color: ${({theme}) => theme.colors.mediumGrey};
  border-radius: 20px;
  z-index: 10;
  overflow: hidden;
  top: 48px;
  left: 0;
  right: 0;
  transition: opacity ${({theme}) => `${theme.utils.timing.fast} ${theme.utils.timing.fast}`} linear;

  ${({show = false}) =>
    show &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;

export const FilterButtonWrap = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;
  position: relative;
  z-index: 2;

  ${({theme}) => theme.media.tablet} {
    padding-left: 30px;
  }
`;

export const FilterLabel = styled.span`
  position: relative;
  z-index: 5;
  transition: color ${({theme}) => theme.utils.timing.faster} linear;

  ${({theme}) => theme.media.phone} {
    flex: 1;
    color: ${({theme}) => theme.colors.white};
    text-align: center;
  }
`;

export const DownLogo = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 30px;
  height: 100%;
  display: flex;
  align-items: center;

  ${({theme}) => theme.media.phone} {
    display: none;
  }
`;

export const StyledChevron = styled(ChevronDownIcon)`
  width: 12px;
  height: auto;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 5;
  transition: transform ${({theme}) => theme.utils.timing.normal};
`;

export const FilterStyled = styled.div<{open?: boolean}>`
  width: 275px;
  height: 50px;
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  border: 1px solid ${({theme}) => theme.colors.mediumGrey};
  color: ${({theme}) => theme.colors.darkGrey};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  box-sizing: border-box;
  border-radius: 100px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  cursor: pointer;

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(50% - 1px);
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.colors.darkGrey};
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50px;
    z-index: 1;
    transition: transform ${({theme}) => theme.utils.timing.fast};
  }

  ${({open, theme}) => {
    const style = css`
      ::before {
        transform: translate(-50%, -50%) scale(1);
      }

      ${FilterLabel} {
        color: ${theme.colors.white};
      }

      ${StyledChevron} {
        svg path {
          stroke: ${theme.colors.white};
        }
      }
    `;

    return css`
      :hover {
        ${style}
      }

      ${open &&
      css`
        ${style}

        ${StyledChevron} {
          transform: rotate(180deg);
        }
      `}
    `;
  }}

  ${({theme}) => theme.media.phone} {
    padding-left: 0;
    width: 100%;
    background-color: ${({theme}) => theme.colors.darkGrey};
  }
`;

export const CustomInput = styled.input`
  appearance: none;
  height: 24px;
  width: 24px;
  border: 1px solid ${({theme}) => theme.colors.white};
  border-radius: 2px;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 5px;

  &:hover {
    background: ${({theme}) => theme.colors.mediumGrey};
    transition: ${({theme}) => theme.utils.timing.normal};
  }

  &:checked {
    background: ${({theme}) => theme.colors.white};
    transition: ${({theme}) => theme.utils.timing.normal};
  }
`;

export const LabelContainer = styled.label`
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  color: ${({theme}) => theme.colors.white};
  font-weight: ${props => props.theme.typography.fontWeight.semiThin};
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  font-family: ${({theme}) => theme.typography.primaryFontFamily};
  width: 100%;
  height: 39px;
  color: ${({theme}) => theme.colors.mediumGrey};
  font-weight: ${props => props.theme.typography.fontWeight.regular};
  font-size: ${({theme}) => theme.typography.fontSize.tiny}px;
  display: flex;
  justify-content: left;
  padding-left: 25px;
  align-items: flex-end;
  margin-bottom: 6px;
`;

export const OptionContainer = styled.div`
  width: 100%;
  height: 56px;
  justify-content: left;
  padding-left: 25px;
  align-items: center;
`;

export const StyledTag = styled.div`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  width: auto;
  height: auto;
  background: ${({theme}) => theme.colors.lightGrey};
  font-weight: ${props => props.theme.typography.fontWeight.semiThin};
  font-size: 11px;
  border-radius: 20px;
  align-items: center;
  margin-right: 20px;
  display: flex;
  cursor: pointer;
`;

export const TitleContainerTag = styled.div`
  padding: 5px 8px;
  width: auto;
  height: auto;
`;

export const ImageContainer = styled.div`
  width: 12px;
  height: 12px;
  padding-right: 20px;
`;

export const ClearButton = styled.button`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  font-size: ${({theme}) => theme.typography.fontSize.tiny}px;
  background: ${({theme}) => theme.colors.white};
  border: none;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  margin-left: auto;
  cursor: pointer;
  display: flex;
`;
