import styled from 'styled-components';

export const CustomInputRadio = styled.input`
  appearance: none;
  height: 24px;
  width: 24px;
  border: 1px solid ${({theme}) => theme.colors.white};
  border-radius: 50%;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: -7px;

  &:hover {
    background: ${({theme}) => theme.colors.mediumGrey};
    transition: 0.3s;
  }

  &:checked {
    background: ${({theme}) => theme.colors.white};
    transition: 0.3s;
  }
`;
