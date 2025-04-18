import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxInput = styled.input.attrs({type: 'checkbox'})`
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  appearance: none;
  border-radius: 0px;
  width: 24px;
  height: 24px;
  padding: 5px;
  border: 1px solid ${props => props.theme.colors.darkGrey};
  background-color: #ffffff;
  cursor: pointer;
  &:checked {
    background-color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.darkGrey};
    padding-top: 3px;
    &:after {
      content: url('/icons/Check16Dark.svg');
    }
  }
`;

export const Label = styled.p`
  font-size: ${props => props.theme.typography.fontSize.extraSmall}px;
  font-weight: ${props => props.theme.typography.fontWeight.thin};
  padding-left: 10px;
`;
