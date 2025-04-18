import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  background-color: ${({theme}) => theme.colors.white};
  overflow-x: hidden;
`;

export const Children = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const Page = styled.main``;
