import React from 'react';
import {useState} from 'react';

import {Wrapper, InputTextStyle, LabelInput, InvalidLabel} from './input.styles';

interface HeaderProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  id: string;
  name: string;
  required: boolean;
  type: string;
  field: string;
  object: Record<string, unknown>;
  invalidMessage?: string;
}

export const Input: React.FC<HeaderProps> = (props): JSX.Element => {
  const [invalid, setInvalid] = useState(false);

  return (
    <Wrapper>
      <InvalidLabel invalid={invalid}>{props.invalidMessage}</InvalidLabel>
      <InputTextStyle
        invalid={invalid}
        id={props.id}
        type={props.type}
        required={props.required}
        onInvalid={() => {
          setInvalid(true);
        }}
        value={props.value}
        onChange={e => {
          setInvalid(false);
          const {value} = e.target;
          props.setValue({
            ...props.object,
            [props.field]: value,
          });
        }}
      />
      <LabelInput htmlFor={props.id}>{props.name}</LabelInput>
    </Wrapper>
  );
};

export default Input;
