import styled from 'styled-components';

export const UploadInput = styled.input`
  display: none;
`;

export const UploadLabel = styled.label`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-weight: ${({theme}) => theme.typography.fontWeight.bold};
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  background: none;
  border: 1px solid ${props => props.theme.colors.darkGrey};
  cursor: pointer;
  border-radius: 100px;
  padding: 15px 30px;
  margin: 0;
  height: 50px;
  width: fit-content;
  display: flex;
  align-items: center;
  transition: background-color 100ms linear;
  margin: 15px 0;

  &:hover {
    background-color: ${({theme}) => theme.colors.lightBlue};
    color: ${({theme}) => theme.colors.darkGrey};
  }

  &:active {
    background: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.mediumGrey};
  }
`;

export const InvalidLabel = styled.div<{invalid: boolean}>`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-weight: ${({theme}) => theme.typography.fontWeight.semiThin};
  display: ${props => (props.invalid ? 'block' : 'none')};
  width: 100%;
  height: auto;
  opacity: ${props => (props.invalid ? '1' : '0')};
  display: block;
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  color: ${({theme}) => theme.colors.red};
  padding-left: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
