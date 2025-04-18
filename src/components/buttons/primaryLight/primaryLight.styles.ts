import styled from 'styled-components';

const GenericButton = styled.button`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 100px;
  padding: 15px 30px;
  margin: 0;
  min-height: 50px;
  width: 100%;
  align-items: center;
  text-align: center;
  transition: background-color 100ms linear;
  a {
    text-decoration: none;
    color: inherit;
    font-size: ${({theme}) => theme.typography.fontSize.small};
    font-weight: ${({theme}) => theme.typography.fontWeight.bold};
  }
  &:disabled {
    opacity: 0.45;
  }
`;

const PrimaryButtonImage = styled.img``;

export const PrimaryButtonLight = styled(GenericButton)`
  background: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.darkGrey};
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  font-weight: ${({theme}) => theme.typography.fontWeight.bold};
  box-shadow: 0 0 0 1px ${({theme}) => theme.colors.darkGrey}, inset 0 0 0 1px ${({theme}) => theme.colors.white};
  ${PrimaryButtonImage} {
    transition: transform 100ms linear;
    transform: translateX(0);
  }
  &:hover {
    background-color: ${({theme}) => theme.colors.lightBlue};
    color: ${({theme}) => theme.colors.darkGrey};
    box-shadow: 0 0 0 1px ${({theme}) => theme.colors.darkGrey}, inset 0 0 0 1px ${({theme}) => theme.colors.lightBlue};

    ${PrimaryButtonImage} {
      transform: translateX(5px);
    }
  }
  &:active {
    background: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.mediumGrey};
    box-shadow: 0 0 0 1px ${({theme}) => theme.colors.mediumGrey}, inset 0 0 0 1px ${({theme}) => theme.colors.white};
  }
`;
