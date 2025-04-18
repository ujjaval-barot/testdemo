import Chevron from 'components/icons/chevron';
import styled from 'styled-components';

export const StyledChevron = styled(Chevron)`
  width: 24px;
  height: 24px;
  path {
    stroke: ${({theme}) => theme.colors.white};
  }
`;

export const LinkBlockCardWrap = styled.div`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  line-height: ${({theme}) => theme.typography.lineHeight.lessLarge}px;
  background: ${({theme}) => theme.colors.darkGrey};
  color: ${({theme}) => theme.colors.white};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  padding: 15px 20px;
  transition: all ${({theme}) => theme.utils.timing.normal};
  border: 3px solid ${({theme}) => theme.colors.darkGrey};

  > a {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;

    ${({theme}) => theme.media.phone} {
      flex-direction: row;
    }
  }
`;

export const LinkBlockCardContainer = styled.div`
  min-height: 106px;
  position: relative;
  flex: 1;
  display: flex;
  background-color: ${({theme}) => theme.colors.blue};
  border-radius: 10px;

  :hover {
    ${LinkBlockCardWrap} {
      transform: translateY(-10px);
      border-color: ${({theme}) => theme.colors.blue};
      background-color: ${({theme}) => theme.colors.white};
      color: ${({theme}) => theme.colors.darkGrey};

      ${StyledChevron} {
        path {
          stroke: ${({theme}) => theme.colors.darkGrey};
        }
      }
    }
  }

  ${({theme}) => theme.media.phone} {
    min-height: auto;
  }
`;

export const TitleContainer = styled.div`
  margin: 0;
  text-align: left;
  vertical-align: middle;
  width: calc(100% - 24px);
  margin-bottom: 10px;

  ${({theme}) => theme.media.phone} {
    margin-bottom: 0px;
  }
`;

export const ButtonContainer = styled.div`
  text-align: right;
  margin-top: auto;

  ${({theme}) => theme.media.phone} {
    margin-top: 0;
  }
`;

export const Title = styled.p`
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  margin: 0;
`;
