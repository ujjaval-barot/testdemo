import {RoundButton} from 'components/buttons/round';
import Arrow from 'components/icons/arrow';
import styled from 'styled-components';

export const CardFullContainer = styled.div`
  width: 100%;
  margin: 0 auto 120px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${({theme}) => theme.media.maxTablet} {
    width: auto;
    margin: 0 auto;
    justify-content: initial;
    flex-wrap: nowrap;
    transition: all ${({theme}) => theme.utils.timing.slow};
  }
`;

export const CardBackgroundWrap = styled.div`
  flex: 0.25;
  display: flex;
  background: ${({theme}) => theme.colors.blue};
  border-radius: 15px;

  & + & {
    margin-left: 15px;
  }

  ${({theme}) => theme.media.maxTablet} {
    flex: 0 0 250px;
    min-height: 300px;
  }
`;

export const CardWrapper = styled.div`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  display: inline-block;
  flex-direction: column;
  border-radius: 10px;
  background: ${({theme}) => theme.colors.lightGrey};
  color: ${({theme}) => theme.colors.darkGrey};
  white-space: normal;
  border: 3px solid transparent;
  transition: all 0.3s ease-in-out;
  transform: rotateX(0deg);
  transform-origin: 50% -50px;
  padding: 60px 30px;
  width: 289px;

  &:hover {
    border: 3px solid ${({theme}) => theme.colors.blue};
    transform: translateY(-10px);
  }

  ${({theme}) => theme.media.maxTablet} {
    padding: 60px 15px;
    width: 250px;
  }
`;

export const CardTitle = styled.h1`
  line-height: 37.4px;
  font-size: ${props => props.theme.typography.fontSize.extraExtraLarge}px;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  margin: 0 0 10px 0;

  ${({theme}) => theme.media.maxTablet} {
    font-family: ${({theme}) => theme.typography.primaryFontFamily};
    font-size: ${props => props.theme.typography.fontSize.larger}px;
    font-weight: ${props => props.theme.typography.fontWeight.semiThin};
    line-height: 31.2px;
  }
`;

export const CardCategory = styled.h3`
  line-height: 28px;
  font-size: ${props => props.theme.typography.fontSize.large}px;
  font-weight: ${props => props.theme.typography.fontWeight.semiThin};
  margin: 0 0 5px 0;
`;

export const CardSynopsis = styled.p`
  line-height: 24px;
  font-size: ${props => props.theme.typography.fontSize.small}px;
  font-weight: ${props => props.theme.typography.fontWeight.semiThin};
  margin: 0;
`;

export const ContainerButtons = styled.div`
  display: none;
  margin-top: 16px;

  ${({theme}) => theme.media.maxTablet} {
    width: 90%;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
  }
`;

export const ArrowIcon = styled(Arrow)<{left?: boolean}>`
  width: 25px;
  height: 25px;
  margin: 11px auto;
  z-index: 10;
  position: relative;
  ${({left = false}) => !left && 'transform: rotate(180deg);'}
`;

export const ImageButton = styled(RoundButton)`
  &:hover,
  &:active {
    ${ArrowIcon} {
      path {
        stroke: ${({theme}) => theme.colors.white};
      }
    }
  }
`;
