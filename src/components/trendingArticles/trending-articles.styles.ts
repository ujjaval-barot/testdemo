import styled from 'styled-components';

export const TrendingCardContainer = styled.div`
  margin-bottom: 120px;

  ${({theme}) => theme.media.maxTablet} {
    margin-bottom: 60px;
  }
`;
