import Carousel from 'components/common/carousel/carousel';
import {CarouselWrapper} from 'components/common/carousel/carousel.styles';
import styled, {css} from 'styled-components';

export const TableCarousel = styled(Carousel)`
  ${({theme}) => theme.media.tablet} {
    ${CarouselWrapper} {
      flex-wrap: wrap;
    }
  }
`;

export const CustomCellTable = styled.div`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  display: table-cell;
  vertical-align: middle;
  padding: 10px 15px;
  flex: 1;

  ${({theme}) => theme.media.phone} {
    display: block;
    border-top: none;
  }
`;

export const CustomRowTable = styled.div<{totalRow?: boolean}>`
  width: 100%;
  display: grid;
  grid-template-columns: 220px 1fr 1fr 1fr 1fr 180px;
  border-bottom: 1px solid ${({theme, totalRow = false}) => (totalRow ? theme.colors.blue : theme.colors.darkGrey)};

  p {
    margin: 0 !important;
  }

  :not(:first-child) {
    :hover {
      ${CustomCellTable} {
        background-color: ${({theme}) => theme.colors.lightBlue};
      }
    }
  }

  :first-child {
    ${CustomCellTable} {
      background-color: ${({theme}) => theme.colors.darkGrey};
      display: table-cell;
      vertical-align: middle;
      padding: 10px 15px;
      border-top: none;

      p {
        font-family: ${({theme}) => theme.typography.secondaryFontFamily};
        font-weight: ${({theme}) => theme.typography.fontWeight.bold};
        color: ${({theme}) => theme.colors.white};
        font-size: ${({theme}) => theme.typography.fontSize.extraTiny}px;
      }

      ${({theme}) => theme.media.phone} {
        font-size: ${({theme}) => theme.typography.fontSize.small}px;
        display: block;
        margin-bottom: 3px;
        border-right: none;
        padding: 15px;
        min-width: 150px;

        p {
          font-size: ${({theme}) => theme.typography.fontSize.small}px;
        }
      }

      ${({theme}) => theme.media.tablet} {
        :not(:last-child) {
          margin-right: 3px;
        }
      }
    }
  }

  ${({theme}) => theme.media.phone} {
    display: flex;
    flex-direction: column;
    border-bottom: none;
  }

  ${({theme}) => theme.media.tablet} {
    grid-template-columns: 180px 1fr 1fr 1fr 1fr 150px;
    :nth-last-child(2) {
      border-bottom: none;
    }

    :last-child {
      font-weight: ${({theme}) => theme.typography.fontWeight.bold};
      border-top: 1px solid ${({theme, totalRow = false}) => (totalRow ? theme.colors.blue : theme.colors.darkGrey)};

      ${({totalRow}) =>
        totalRow &&
        css`
          ${CustomCellTable} {
            p {
              font-weight: ${({theme}) => theme.typography.fontWeight.bold};
            }
          }
        `}
    }
  }
`;
