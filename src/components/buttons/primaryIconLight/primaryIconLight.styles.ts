import styled from 'styled-components';

const GenericButton = styled.button`
  font-family: ${({theme}) => theme.typography.primaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  font-weight: ${({theme}) => theme.typography.fontWeight.regular};
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 100px;
  padding: 15px 30px;
  margin: 0;
  height: auto;
  width: 100%;
  align-items: center;
  transition: background-color 100ms linear;
  &:disabled {
    opacity: 0.45;
  }
`;

export const PrimaryButtonImage = styled.img``;

export const PrimaryButtonLight = styled(GenericButton)`
  background: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.darkGrey};
  box-shadow: 0 0 0 1px ${({theme}) => theme.colors.darkGrey}, inset 0 0 0 1px ${({theme}) => theme.colors.white};
  ${PrimaryButtonImage} {
    transition: transform 100ms linear;
    transform: translateX(0);
  }
  &:hover {
    background: ${({theme}) => theme.colors.lightBlue};
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
