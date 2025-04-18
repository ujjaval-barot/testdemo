import styled from 'styled-components';

interface WrapperProp {
  readonly lineBottom: boolean;
}

export const WrapperAdjustable = styled.div<WrapperProp>`
  display: block;
  width: 100%;
  height: auto;
  margin: 0 auto;
  border-bottom: ${({lineBottom}) => (lineBottom ? '1px solid #1f1f1f' : 'initial')};
`;

export const InsideWrapper = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;

  ${({theme}) => theme.media.maxTablet} {
    width: 93%;
  }
`;

export const ContactFormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 120px;

  ${({theme}) => theme.media.maxTablet} {
    display: block;
    margin-bottom: 30px;
  }
`;

export const ContactPartWrap = styled.div`
  display: inline-block;
  width: 40%;
  height: auto;

  ${({theme}) => theme.media.maxTablet} {
    width: 100%;
  }
`;
