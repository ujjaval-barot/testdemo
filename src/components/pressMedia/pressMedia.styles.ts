import styled from 'styled-components';

export const ContainerPress = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const PressCard = styled.div`
  width: 40%;
  height: auto;
  display: inline-block;
  margin-bottom: 70px;

  ${({theme}) => theme.media.maxTablet} {
    display: block;
    width: 100%;
  }
`;

export const PressImage = styled.div`
  width: 170px;
  display: inline-block;
  background: ${({theme}) => theme.colors.lightGrey};
  align-items: center;
  vertical-align: top;
  margin-top: 25px;

  ${({theme}) => theme.media.maxTablet} {
    display: flex;
    justify-content: center;
    width: 130px;
  }
`;

export const PressText = styled.div`
  width: 50%;
  height: auto;
  display: inline-block;
  padding-left: 25px;

  ${({theme}) => theme.media.maxTablet} {
    display: block;
    padding-left: 0px;
    width: 100%;
  }
`;

export const DatePress = styled.div`
  width: 100%;
  height: auto;
  display: inline-block;
  font-weight: ${props => props.theme.typography.fontWeight.semiThin};
  font-size: ${({theme}) => theme.typography.fontSize.tiny}px;
  line-height: 12px;
  text-transform: uppercase;
  padding-bottom: 13px;

  ${({theme}) => theme.media.maxTablet} {
    padding-top: 15px;
    align-items: center;
  }
`;

export const TitlePress = styled.div`
  width: 100%;
  height: auto;
  display: inline-block;
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  font-size: ${({theme}) => theme.typography.fontSize.large}px;
  line-height: 26px;
  padding-bottom: 13px;
`;

export const SourcePress = styled.div`
  width: 100%;
  height: auto;
  display: inline-block;
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-weight: ${props => props.theme.typography.fontWeight.semiThin};
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  line-height: 24px;
  padding-bottom: 10px;
`;

export const ContainerButton = styled.div<{showButton: boolean}>`
  display: ${({showButton}) => (showButton ? 'none' : 'block')};
  width: 20%;
  margin-bottom: 120px;

  ${({theme}) => theme.media.maxTablet} {
    width: 100%;
  }
`;

export const PressMediaLink = styled.a`
  &:link {
    text-decoration: none;
    color: ${({theme}) => theme.colors.darkGrey};
  }

  &:visited {
    text-decoration: none;
    color: ${({theme}) => theme.colors.darkGrey};
  }

  &:hover {
    color: ${({theme}) => theme.colors.darkGrey};
  }
`;
