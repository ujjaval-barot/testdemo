import styled from 'styled-components';

export const AccordionContainer = styled.div<{show: boolean}>`
  width: 100%;
  max-height: ${props => (props.show ? '10000px' : '0')};
  transition: all 0.4s ease-in-out;
  overflow: hidden;
`;

export const ButtonContainer = styled.div<{useButton: boolean}>`
  position: absolute;
  width: auto;
  height: 0;
  bottom: ${({useButton}) => (useButton ? '70px' : '0')};
  left: 93%;

  ${({useButton}) =>
    useButton
      ? `
        bottom: 70px;
      `
      : `
        top: 0;
      `}

  ${({theme}) => theme.media.maxTablet} {
    left: 87%;
  }
`;

export const RoundButton = styled.button<{show: boolean}>`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  vertical-allign: middle;
  background: ${props => props.theme.colors.white};
  border: ${props =>
    props.show ? `1px solid ${props.theme.colors.blue}` : `1px solid ${props.theme.colors.darkGrey}`};
  transform: ${({show}) => (show ? 'rotate(180deg);' : 'rotate(0deg);')};
  transition: ${({theme}) => theme.utils.timing.normal};

  svg {
    margin: auto;
    path {
      stroke: ${props => (props.show ? `${props.theme.colors.blue}` : `${props.theme.colors.darkGrey}`)};
    }
  }
`;
