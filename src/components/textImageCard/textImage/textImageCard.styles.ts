import styled from 'styled-components';

const border = (color: string) => `1px solid ${color}`;

export const Container = styled.div<{imageLeft: boolean}>`
  width: 100%;
  min-height: 630px;
  display: flex;
  border-top: ${({theme}) => border(theme.colors.darkGrey)};
  flex-direction: ${props => (props.imageLeft ? 'row' : 'row-reverse')};
  align-items: stretch;

  & + & {
    border-top: none;
  }

  :not(:last-child) {
    border-bottom: ${({theme}) => border(theme.colors.darkGrey)};
  }

  ${({theme}) => theme.media.maxTablet} {
    flex-wrap: wrap;
    min-height: 592px;
    border: none;
  }
`;

export const ImageVideo = styled.div`
  position: relative;
  aspect-ratio: 640 / 631;
  flex: 0 0 44%;
  overflow: hidden;

  ${({theme}) => theme.media.maxTablet} {
    flex: 0 0 calc(100% - 20px);
    aspect-ratio: 355 / 200;
    margin: 10px 10px 0 10px;
  }
`;

export const InsetImage = styled.div<{imageLeft: boolean}>`
  width: 512px;
  height: 349px;
  position: absolute;
  top: 125px;

  ${({imageLeft}) => (imageLeft ? `right: 0;` : `left: 0;`)}

  ${({theme}) => theme.media.maxTablet} {
    position: static;
  }
`;

export const VideoWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  ${({theme}) => theme.media.desktop} {
    transform: scale(1.8);
  }

  ${({theme}) => theme.media.maxTablet} {
    transform: scale(1.06);
  }

  > div {
    height: 100% !important;
  }
`;

export const TextPart = styled.div<{imageLeft: boolean}>`
  display: flex;

  ${({theme}) => theme.media.maxTablet} {
    flex: 1;
  }
`;

export const ImageDisplay = styled.div<{videoDisplay: boolean}>`
  display: ${props => (props.videoDisplay ? 'none' : 'inline-block')};
  position: relative;
`;

export const CustomVideo = styled.video<{videoDisplay: boolean}>`
  display: ${props => (props.videoDisplay ? 'inline-block' : 'none')};
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
`;

export const TextContainer = styled.div`
  padding: 15%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({theme}) => theme.media.maxTablet} {
    margin: 0;
    padding: 8% 8% 16% 8%;
  }
`;

export const Subtitle = styled.a`
  font-family: ${({theme}) => theme.typography.primaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.tiny}px;
  font-weight: ${({theme}) => theme.typography.fontWeight.regular};
  line-height: 120%;
  color: ${({theme}) => theme.colors.darkGrey};
  text-transform: uppercase;

  ${({theme}) => theme.media.maxTablet} {
    display: inline-block;
  }

  &:link {
    text-decoration: none;
  }

  &:visited {
    color: ${({theme}) => theme.colors.darkGrey};
    text-decoration: none;
  }
`;

export const Title = styled.p`
  font-family: ${({theme}) => theme.typography.primaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.huge}px;
  font-weight: ${({theme}) => theme.typography.fontWeight.regular};
  line-height: 130%;
  margin-top: 30px;
  margin-bottom: 15px;

  ${({theme}) => theme.media.maxTablet} {
    font-size: ${({theme}) => theme.typography.fontSize.larger}px;
    margin-top: 24px;
    margin-bottom: 15px;
  }
`;

export const SecondSubtitle = styled.p`
  font-family: ${({theme}) => theme.typography.primaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.extraLarge}px;
  font-weight: ${({theme}) => theme.typography.fontWeight.regular};
  line-height: 130%;
  margin-top: 25px;
  margin-bottom: 20px;

  ${({theme}) => theme.media.maxTablet} {
    font-size: ${({theme}) => theme.typography.fontSize.larger}px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const Content = styled.div`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  font-weight: ${({theme}) => theme.typography.fontWeight.semiThin};
  line-height: 150%;
  margin-bottom: 30px;

  ${({theme}) => theme.media.maxTablet} {
    margin-bottom: 32px;
  }
`;
