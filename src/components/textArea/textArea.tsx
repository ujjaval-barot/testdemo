import React from 'react';
import {useState} from 'react';

import {Wrapper, MessageStyle, LabelInput, InvalidLabel} from './textArea.styles';

interface HeaderProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  id: string;
  name: string;
  required: boolean;
  rows: number;
  object: Record<string, unknown>;
  field: string;
  invalidMessage?: string;
}

export const TextArea: React.FC<HeaderProps> = (props): JSX.Element => {
  const [invalid, setInvalid] = useState(false);
  return (
    <Wrapper>
      <InvalidLabel invalid={invalid}>{props.invalidMessage}</InvalidLabel>
      <MessageStyle
        id={props.id}
        required={props.required}
        rows={props.rows}
        value={props.value}
        onChange={e => {
          const {value} = e.target;
          props.setValue({
            ...props.object,
            [props.field]: value,
          });
          setInvalid(false);
        }}
        onInvalid={() => setInvalid(true)}
        invalid={invalid}
      />
      <LabelInput htmlFor={props.id}>{props.name}</LabelInput>
    </Wrapper>
  );
};

export default TextArea;
