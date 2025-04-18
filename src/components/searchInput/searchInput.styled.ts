import styled from 'styled-components';

export const SearchContainer = styled.form`
  display: flex;
  flex-direction: row;
  height: 50px;
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  border: ${props => `1px solid ${props.theme.colors.mediumGrey}`};
  color: ${({theme}) => theme.colors.greyText};
  box-sizing: border-box;
  border-radius: 100px;
  padding: 2px 2px 2px 42px;

  background-image: url('/icons/Search.svg');
  background-repeat: no-repeat;
  background-position: left 12px center;
  background-size: 24px;

  + label {
    color: ${({theme}) => theme.colors.mediumGrey};
  }

  &:focus-within {
    color: ${({theme}) => theme.colors.greyText};
    border: 1px solid ${({theme}) => theme.colors.blue};
    background-color: ${({theme}) => theme.colors.lightBlue};

    button {
      background: ${({theme}) => theme.colors.blue};
      color: ${({theme}) => theme.colors.white};
    }
  }

  &:placeholder-shown {
    border: 1px solid ${({theme}) => theme.colors.mediumGrey};
    color: ${({theme}) => theme.colors.mediumGrey};
  }
`;

export const SearchTextInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: none;
`;
