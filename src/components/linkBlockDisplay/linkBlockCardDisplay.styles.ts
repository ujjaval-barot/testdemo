import styled from 'styled-components';

export const LinkBlockContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  margin-top: 8px;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 15px;
  margin-bottom: 40px;

  ${({theme}) => theme.media.phone} {
    flex-direction: column;
    flex-wrap: nowrap;
    margin-bottom: 30px;
  }
`;
