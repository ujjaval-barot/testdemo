import Arrow from 'components/icons/arrow';
import styled, {css} from 'styled-components';
import {CarouselProps} from './carousel';

type StyledCarouselProps = Omit<CarouselProps, 'className'>;

export const CarouselContainer = styled.div<{sideButtons?: boolean}>`
  position: relative;

  ${({sideButtons, theme}) =>
    sideButtons &&
    css`
      ${theme.media.desktop} {
        ::before,
        ::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 130px;
          height: 100%;
          background-color: ${({theme}) => theme.colors.white};
          z-index: 2;
        }

        ::after {
          right: 0;
          left: auto;
        }
      }
    `}
`;

export const CarouselWrapper = styled.div<StyledCarouselProps>`
  width: 100%;
  margin: 0 auto 60px auto;
  display: flex;
  transition: all ${({theme}) => theme.utils.timing.slow};
  position: relative;

  ${({mobileOnly = true}) =>
    mobileOnly &&
    css`
      justify-content: space-between;
    `}

  ${({theme, breakpoint = 'maxTablet'}) => theme.media[breakpoint]} {
    width: auto;
    margin: 0 auto;
    justify-content: initial;
    flex-wrap: nowrap;
  }
`;

export const ArrowIcon = styled(Arrow)<{left?: boolean}>`
  width: 25px;
  height: 25px;
  margin: 11px auto;
  z-index: 20;
  position: relative;
  transform: rotate(${({left = false}) => !left && '-'}90deg);
`;

const BUTTON_SIZE = 50;
const BORDER_WIDTH = 1;

export const ArrowButtonBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({theme}) => theme.colors.white};
  width: ${BUTTON_SIZE - BORDER_WIDTH * 2}px;
  height: ${BUTTON_SIZE - BORDER_WIDTH * 2}px;
  border-radius: ${BUTTON_SIZE - BORDER_WIDTH}px;
`;

export const ArrowButton = styled.div<{atEnd?: boolean}>`
  width: ${BUTTON_SIZE}px;
  height: ${BUTTON_SIZE}px;
  border-radius: ${BUTTON_SIZE}px;
  cursor: pointer;
  background-color: ${({theme}) => theme.colors.darkGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: ${({theme}) => theme.utils.timing.normal};
  overflow: hidden;
  z-index: 3;

  ${({atEnd = false, theme}) =>
    !atEnd
      ? css`
          ::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            transition: all ${theme.utils.timing.fast};
            background-color: ${theme.colors.black};
            border-radius: 50%;
            width: 100%;
            height: 100%;
            z-index: 15;
          }

          :hover {
            ::before {
              transform: translate(-50%, -50%) scale(1.2);
            }
          }

          :active {
            background-color: ${theme.colors.black};
          }

          &:hover,
          &:active {
            ${ArrowIcon} {
              path {
                stroke: ${theme.colors.white};
              }
            }
          }
        `
      : css`
          opacity: 0;
        `}
`;

export const SideArrowButton = styled(ArrowButton)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateX(-50%, 50%);

  :last-child {
    left: auto;
    right: 0;
  }
`;

export const ContainerButtons = styled.div<StyledCarouselProps>`
  ${({mobileOnly = true}) => mobileOnly && 'display: none;'}
  margin-top: 16px;
  width: 90%;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;

  ${({theme, breakpoint = 'maxTablet'}) => theme.media[breakpoint]} {
    display: flex;
  }

  ${({theme}) => theme.media.desktop} {
    justify-content: flex-end;

    > ${ArrowButton}:first-child {
      margin-right: 80px;
    }
  }
`;
