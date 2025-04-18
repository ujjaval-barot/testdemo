import styled from 'styled-components';

export const ContainerTwitter = styled.div`
  overflow: hidden;
`;

export const CardFullContainer = styled.div`
  display: block;
  justify-content: initial;
  white-space: nowrap;
  transition: all ${({theme}) => theme.utils.timing.slow};
  padding: 0 130px;

  ${({theme}) => theme.media.maxTablet} {
    width: 100%;
  }
`;

export const ErrorMessageContainer = styled.div<{showError: boolean}>`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  width: auto;
  height: auto;
  margin: 0 auto;
  display: ${({showError}) => (showError ? 'block' : 'none')};
`;
