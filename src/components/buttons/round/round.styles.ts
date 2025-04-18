import styled, {css} from 'styled-components';

const RoundBtn = styled.button`
  font-family: ${({theme}) => theme.typography.primaryFontFamily};
  background: none;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 4px 0px 0px;
  font-weight: 300;
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
`;

export const RoundButton = styled(RoundBtn)<{active: boolean}>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${({theme}) => theme.colors.darkGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: background-color ${({theme}) => theme.colors.black};
  cursor: pointer;

  > * {
    position: relative;
    z-index: 2;
    pointer-events: none;
    color: ${({theme}) => theme.colors.darkGrey}; /* Default text color */
    transition: color ${({theme}) => theme.utils.timing.fast}; /* Add transition here */
  }

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all ${({theme}) => theme.utils.timing.fast};
    background-color: ${({theme}) => theme.colors.black};
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  ${({theme, active = false}) => {
    const style = `
    color: ${theme.colors.white};
    > * {
      color: ${theme.colors.white};
    }
    ::before {
      transform: translate(-50%, -50%) scale(1);
    }
    `;
    return css`
      :hover {
        ${style}
      }

      ${active && style}
    `;
  }}
  :active {
    background-color: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};

    > * {
      color: ${({theme}) => theme.colors.white}; /* Default text color */
    }
  }
`;
