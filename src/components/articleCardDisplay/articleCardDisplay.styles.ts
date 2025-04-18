import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  min-height: 738px;

  ${({theme}) => theme.media.maxTablet} {
    display: flex;
    flex-direction: column;
    min-height: 512px;
  }
`;

export const ButtonArticleContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 40px 0;
  background-color: ${({theme}) => theme.colors.white};
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const DisabledPageIconButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 50px;
`;

export const PageIconButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  cursor: pointer;
  transition: background-color 0.3s;

  :hover {
    color: ${({theme}) => theme.colors.blue};
  }

  &.disabled {
    opacity: 0.2;
    cursor: auto;
  }
`;

export const PageButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${({theme}) => theme.colors.darkGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color ${({theme}) => theme.colors.black};
  cursor: pointer;

  :hover,
  &.active {
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.black};
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
