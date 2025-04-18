import FormattedDate from 'components/common/formatted-date';
import styled from 'styled-components';

export const CardImageContainer = styled.div`
  position: relative;
  font-family: ${({theme}) => theme.typography.primaryFontFamily};
  display: inline-block;
  width: 390px;
  flex: 0 0 390px;
  min-height: 540px;
  flex-direction: column;
  border-radius: 10px;
  background: ${({theme}) => theme.colors.lightGrey};
  color: ${({theme}) => theme.colors.darkGrey};
  border: 2px solid transparent;
  white-space: normal;
  margin: 0 24px 0 0;
  cursor: pointer;
  align-items: center;

  &:hover {
    border: 2px solid ${({theme}) => theme.colors.blue};
  }

  @media (max-width: 768px) {
    flex: 0 0 264px;
    width: 264px;
    min-height: 484px;
  }
`;

export const CardImageWrap = styled.div`
  width: 100%;
  height: 225px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  position: relative;
  overflow: hidden;
`;

export const TagContainer = styled.div`
  display: flex;
  width: 84.62%;
  height: 19.63%;
  margin: 0 54px 0 40px;
  padding-top: 48px;
  font-size: ${({theme}) => theme.typography.fontSize.tiny}px;
  color: ${({theme}) => theme.colors.darkGrey};
  text-align: left;

  @media (max-width: 768px) {
    margin: 0 38px 0 29px;
  }
`;

export const TitleContainer = styled.div`
  width: 84.62%;
  height: 19.63%;
  margin: 0 auto;
  font-size: ${({theme}) => theme.typography.fontSize.larger}px;
  color: ${({theme}) => theme.colors.darkGrey};
  font-weight: ${({theme}) => theme.typography.fontWeight.semiThin};
  text-align: left;
  line-height: 130%;
`;

export const DateContainer = styled(FormattedDate)`
  width: 84.62%;
  margin: 0 auto;
  padding-top: 48px;
  font-size: ${({theme}) => theme.typography.fontSize.tiny}px;
  font-weight: ${({theme}) => theme.typography.fontWeight.semiThin};
  text-align: left;
  line-height: 130%;
  text-transform: uppercase;
`;
