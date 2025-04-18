import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioInput = styled.input.attrs({type: 'radio'})`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  width: 24px;
  height: 24px;
  background-clip: content-box;
  border: 1px solid ${props => props.theme.colors.darkGrey};
  background-color: #ffffff;
  border-radius: 50%;
  cursor: pointer;
  &:checked {
    transition: all 100ms linear;
    padding: 4px;
    background-color: ${props => props.theme.colors.darkGrey};
  }
`;

export const Label = styled.p`
  font-size: ${props => props.theme.typography.fontSize.extraSmall}px;
  font-weight: ${props => props.theme.typography.fontWeight.thin};
  padding-left: 10px;
`;
