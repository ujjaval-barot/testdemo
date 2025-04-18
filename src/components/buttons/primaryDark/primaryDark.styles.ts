import styled from 'styled-components';

const GenericButton = styled.button`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 100px;
  padding: 15px 30px;
  margin: 0;
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  transition: background-color 100ms linear;
  a {
    text-decoration: none;
    color: inherit;
    font-size: ${({theme}) => theme.typography.fontSize.small}px;
    font-weight: ${({theme}) => theme.typography.fontWeight.bold};
  }
  &:disabled {
    opacity: 0.45;
  }
`;

const PrimaryButtonImage = styled.img``;

export const PrimaryButtonDark = styled(GenericButton)`
  background: ${({theme}) => theme.colors.darkGrey};
  color: ${({theme}) => theme.colors.white};
  ${PrimaryButtonImage} {
    transition: transform 100ms linear;
    transform: translateX(0);
  }
  &:hover {
    background: ${({theme}) => theme.colors.blue};
    color: ${({theme}) => theme.colors.white};
    box-shadow: 0 0 0 1px ${({theme}) => theme.colors.blue}, inset 0 0 0 1px ${({theme}) => theme.colors.blue};

    ${PrimaryButtonImage} {
      transform: translateX(5px);
    }
  }
  &:active {
    background: ${({theme}) => theme.colors.mediumGrey};
    color: ${({theme}) => theme.colors.white};
    box-shadow: 0 0 0 1px ${({theme}) => theme.colors.mediumGrey};
    inset 0 0 0 1px ${({theme}) => theme.colors.mediumGrey};
  }
`;
