import styled from 'styled-components';

export const SectionTitleContainer = styled.div`
  margin: 120px 0 60px;
  height: 35px;

  ${({theme}) => theme.media.maxTablet} {
    margin: 60px 0;
  }
`;

export const SectionTitleStyle = styled.h1`
  font-family: ${props => props.theme.typography.primaryFontFamily};
  font-size: ${props => props.theme.typography.fontSize.tiny}px;
  font-weight: ${props => props.theme.typography.fontWeight.semiThin};
  text-transform: uppercase;
  border-bottom: 1px solid ${props => props.theme.colors.darkGrey};
  padding-bottom: 15px;
  margin: 0;
`;
