import styled from 'styled-components';

export const Container = styled.div<{imageLeft: boolean}>`
  width: 100%;
  height: 630px;
  display: flex;
  border-top: 1px solid ${({theme}) => theme.colors.darkGrey};
  flex-direction: ${props => (props.imageLeft ? 'row' : 'row-reverse')};

  ${({theme}) => theme.media.phone} {
    flex-direction: column;
    height: auto;
  }
`;

export const ImageVideo = styled.div`
  width: 44.44%;
  height: inherit;
  text-align: right;

  ${({theme}) => theme.media.phone} {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TextPart = styled.div`
  width: 55.56%;
  height: 100%;

  ${({theme}) => theme.media.phone} {
    width: 100%;
    height: 62.83%;
    border-left: none;
    border-right: none;
  }
`;

export const ImageDisplay = styled.div<{videoDisplay: boolean}>`
  width: 78%;
  height: 60%;
  display: ${props => (props.videoDisplay ? 'none' : 'block')};
  margin: auto;
  margin-top: 130px;
  margin-right: 0;
  position: relative;

  ${({theme}) => theme.media.phone} {
    width: 94.66%;
    height: 90.91%;
    margin-top: 10px;
    margin-right: auto;
  }
`;

export const CustomVideo = styled.video<{videoDisplay: boolean}>`
  width: 100%;
  height: 630px;
  margin-top: -1px;
  display: ${props => (props.videoDisplay ? 'inline-block' : 'none')};
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;

  ${({theme}) => theme.media.phone} {
    width: 94.66%;
    height: 90.91%;
    margin-top: 0px;
  }
`;

export const TextContainer = styled.div`
  width: 70%;
  height: 46.12%;
  margin: 13.02% auto 34.87% auto;

  ${({theme}) => theme.media.phone} {
    width: 92%;
    height: 100%;
    margin: 0 auto;
  }
`;

export const BigText = styled.p`
  font-family: ${({theme}) => theme.typography.primaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.huge}px;
  font-weight: ${({theme}) => theme.typography.fontWeight.regular};
  line-height: 120%;
  color: ${({theme}) => theme.colors.darkGrey};

  ${({theme}) => theme.media.phone} {
    display: inline-block;
    padding-left: 16px;
    margin-top: 32px;
  }
`;

export const Title = styled.p`
  width: 85%;
  font-family: ${({theme}) => theme.typography.primaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.huge}px;
  font-weight: ${({theme}) => theme.typography.fontWeight.regular};
  line-height: 130%;
  margin-bottom: 40px;
  margin-top: -13px;

  ${({theme}) => theme.media.phone} {
    width: 65%;
    font-size: ${({theme}) => theme.typography.fontSize.larger}px;
    padding-left: 16px;
    margin-top: 24px;
    margin-bottom: 15px;
  }
`;

export const Content = styled.p`
  margin-top: -24px;
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  font-weight: ${({theme}) => theme.typography.fontWeight.semiThin};
  line-height: 150%;
  margin-bottom: 30px;

  ${({theme}) => theme.media.phone} {
    margin-top: -11px;
    margin-bottom: 20px;
    width: 85%;
    padding-left: 15px;
  }
`;

export const ButtonContainer = styled.div`
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 32px;

  ${({theme}) => theme.media.phone} {
    padding-left: 10px;
  }
`;

export const CustomLI = styled.li`
  margin-left: -15px;
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  font-weight: ${({theme}) => theme.typography.fontWeight.semiThin};

  ${({theme}) => theme.media.phone} {
    margin-left: 0px;
  }
`;

export const CustomUL = styled.ul`
  margin-bottom: 15px;
`;
