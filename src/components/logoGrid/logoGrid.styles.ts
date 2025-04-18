import styled from 'styled-components';

export const GridLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 120px;
  row-gap: 60px;
  position: relative;

  ${({theme}) => theme.media.maxTablet} {
    row-gap: 30px;
    margin-bottom: 80px;
  }
`;

export const ImageWrap = styled.div`
  height: 95px;
  width: 100%;
  max-width: 180px;
  margin: 0 auto;
`;

export const ImageSpace = styled.div`
  margin: 0 auto;
  width: 18%;
  height: auto;
  flex: 0 0 calc(20% - 15px);

  ${({theme}) => theme.media.maxTablet} {
    flex: 0 0 calc(50% - 15px);
    :nth-child(odd):not(:last-child) {
      margin-right: auto;
    }
  }
`;
