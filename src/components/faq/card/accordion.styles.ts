import styled from 'styled-components';

export const QuestionBlock = styled.div`
  font-family: ${({theme}) => theme.typography.primaryFontFamily};
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const QuestionTextStyle = styled.p`
  width: 85%;
  font-size: ${props => props.theme.typography.fontSize.larger}px;
  font-weight: ${props => props.theme.typography.fontWeight.semiThin};
  margin: 10px 0 0px 0;
  line-height: 31px;
  cursor: pointer;

  ${({theme}) => theme.media.maxTablet} {
    font-size: ${props => props.theme.typography.fontSize.large}px;
    line-height: 26px;
  }
`;

export const AnswerTextStyle = styled.p`
  width: 70%;
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-size: ${props => props.theme.typography.fontSize.small}px;
  font-weight: ${props => props.theme.typography.fontWeight.semiThin};
  margin: 20px 0;
  line-height: 24px;

  ${({theme}) => theme.media.maxTablet} {
    font-size: ${props => props.theme.typography.fontSize.large}px;
    line-height: 26px;
    width: 90%;
  }
`;

export const ContainerAccordion = styled.div`
  width: 79%;
  margin: 0 auto;
  height: auto;
  border-bottom: 1px solid ${props => props.theme.colors.darkGrey};
  margin-bottom: 30px;
  position: relative;
`;
