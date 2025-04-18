import styled from 'styled-components';

export const ChevronDownContainer = styled.div`
  width: 20px;
  height: 8px;

  svg path {
    stroke: ${({theme}) => theme.colors.darkGrey};
  }
`;
