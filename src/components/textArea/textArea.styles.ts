import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 30px;
`;

export const MessageStyle = styled.textarea<{invalid: boolean}>`
  width: 100%;
  height: auto;
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  border: ${props =>
    props.invalid ? `1px solid ${props.theme.colors.red}` : `1px solid ${props.theme.colors.mediumGrey}`};
  box-sizing: border-box;
  border-radius: 20px;
  resize: none;
  padding: 9px 15px;

  + label {
    color: ${props => (props.invalid ? ({theme}) => theme.colors.red : ({theme}) => theme.colors.mediumGrey)};
  }

  &:focus {
    color: color: ${({theme}) => theme.colors.mediumGrey};
    border: 1px solid ${({theme}) => theme.colors.mediumGrey};
  }

  &:placeholder-shown {
    border: 1px solid ${({theme}) => theme.colors.greyText};
    color: ${({theme}) => theme.colors.greyText};
  }
`;

export const LabelInput = styled.label`
  display: block;
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  color: ${({theme}) => theme.colors.greyText};
  margin-bottom: 1.5%;
`;

export const InvalidLabel = styled.div<{invalid: boolean}>`
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-weight: ${({theme}) => theme.typography.fontWeight.semiThin};
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
