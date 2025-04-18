import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: column-reverse;
`;

export const InputTextStyle = styled.input<{invalid: boolean}>`
  display: block;
  width: 100%;
  height: 50px;
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  border: ${props =>
    props.invalid ? `1px solid ${props.theme.colors.red}` : `1px solid ${props.theme.colors.mediumGrey}`};
  color: ${({theme}) => theme.colors.greyText};
  box-sizing: border-box;
  border-radius: 100px;
  padding: 0 3.122%;

  + label {
    color: ${props => (props.invalid ? ({theme}) => theme.colors.red : ({theme}) => theme.colors.mediumGrey)};
  }

  &:focus {
    color: ${({theme}) => theme.colors.greyText};
    border: 1px solid ${({theme}) => theme.colors.mediumGrey};
  }

  &:placeholder-shown {
    border: 1px solid ${({theme}) => theme.colors.mediumGrey};
    color: ${({theme}) => theme.colors.mediumGrey};
  }
`;

export const LabelInput = styled.label`
  display: block;
  font-family: ${({theme}) => theme.typography.primaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  color: ${({theme}) => theme.colors.greyText};
  margin-bottom: 20px;
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

export const SelectStyle = styled.select<{invalid: boolean}>`
  display: block;
  width: 100%;
  height: 50px;
  font-family: ${({theme}) => theme.typography.secondaryFontFamily};
  font-size: ${({theme}) => theme.typography.fontSize.small}px;
  border: ${props =>
    props.invalid ? `1px solid ${props.theme.colors.red}` : `1px solid ${props.theme.colors.mediumGrey}`};
  color: ${({theme}) => theme.colors.greyText};
  box-sizing: border-box;
  border-radius: 100px;
  padding: 0 3.122%;
  appearance: none;

  background-image: url('/icons/ChevronDownDark16.svg');
  background-repeat: no-repeat;
  background-position: right 3.122% center;
  background-size: 16px;

  + label {
    color: ${props => (props.invalid ? ({theme}) => theme.colors.red : ({theme}) => theme.colors.mediumGrey)};
  }

  &:focus {
    color: ${({theme}) => theme.colors.greyText};
    border: 1px solid ${({theme}) => theme.colors.mediumGrey};
  }

  &:placeholder-shown {
    border: 1px solid ${({theme}) => theme.colors.mediumGrey};
    color: ${({theme}) => theme.colors.mediumGrey};
  }
`;
