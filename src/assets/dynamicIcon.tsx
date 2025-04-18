import styled from 'styled-components';

const DynamicIconStyled = styled.svg`
  width: 24px;
  height: 24px;

  path {
    stroke: ${({color}) => color || 'currentColor'}; /* Defaults to the current text color */
  }
`;

export const ChevronLeft = () => {
  return (
    <DynamicIconStyled width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 21L7 12L16 3" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </DynamicIconStyled>
  );
};

export const ChevronRight = () => {
  return (
    <DynamicIconStyled width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3L17 12L7.99999 21" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </DynamicIconStyled>
  );
};

export const ChevronLeftSmall = () => {
  return (
    <DynamicIconStyled width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 16.5L5 10.5L11 4.5" stroke="#1F1F1F" strokeLinecap="round" strokeLinejoin="round" />
    </DynamicIconStyled>
  );
};
