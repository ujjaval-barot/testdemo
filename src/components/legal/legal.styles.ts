import styled from 'styled-components';

export const LegalWrapper = styled.div`
  width: 79%;
  margin: 0 auto;
  height: auto;
  overflow-y: hidden;
`;

export const LegalContainer = styled.div`
  width: 100%;
  height: auto;
  margin 0 auto 60px auto;
`;

export const LegalQuestion = styled.div`
  width: 70%;
  height: auto;
  margin: 0 0 15px 0;
  font-size: ${({theme}) => theme.typography.fontSize.larger}px;
  font-weight: ${props => props.theme.typography.fontWeight.semiThin};
  line-height: 31px;

  ${({theme}) => theme.media.maxTablet} {
    width: 100%;
    margin: 0 0 10px 0;
  }
`;

export const LegalAnswer = styled.div`
  width: 60%;
  height: auto;
  margin: 0;
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-weight: ${props => props.theme.typography.fontWeight.semiThin};
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  line-height: 24px;

  ${({theme}) => theme.media.maxTablet} {
    width: 100%;
  }
`;
