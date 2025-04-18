import styled from 'styled-components';

export const HorizontalRule = styled.div<{show?: boolean}>`
  ${({show = true}) => !show && 'display: none;'}
  background-color: ${({theme}) => theme.colors.darkGrey};
  height: 1px;
  display: block;
  width: 1440px;
  transform: translateX(-120px);
`;
