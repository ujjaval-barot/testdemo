import React from 'react';
import {useState} from 'react';

import {
  CustomSelectBar,
  DownLogo,
  OptionsMenu,
  CheckedOption,
  CheckedLogo,
  MenuOption,
  CustomInput,
  CustomLabel,
  Wrapper,
  CustomTitle,
  InvalidLabel,
} from './select.styles';

interface HeaderProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  id: string;
  name: string;
  options: Array<string>;
  required: boolean;
  object: Record<string, unknown>;
  field: string;
  invalidMessage?: string;
}

export const Select: React.FC<HeaderProps> = (props): JSX.Element => {
  const [active, setActive] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const changeAndSave = (e: any) => {
    const value = e.target.value;
    props.setValue({
      ...props.object,
      [props.field]: value,
    });
    setActive(false);
    setInvalid(false);
  };

  return (
    <Wrapper>
      <CustomTitle invalid={invalid && props.required}>{props.name}</CustomTitle>
      <CustomSelectBar
        invalid={invalid && props.required}
        onClick={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        id={props.id}
      >
        {props.value}
        <DownLogo src="/img/down.svg" />
        <OptionsMenu isActive={active}>
          <CheckedOption onClick={() => setActive(false)}>
            {props.value}
            <CheckedLogo></CheckedLogo>
          </CheckedOption>
          {props.options?.map((o, index) => (
            <MenuOption key={`${index}-${props.id}`}>
              <CustomInput
                id={`${props.id}${index}`}
                type="radio"
                name="reasonForm"
                value={o}
                onChange={changeAndSave}
                required={props.required}
                onInvalid={() => setInvalid(true)}
              />
              <CustomLabel htmlFor={`${props.id}${index}`}>{o}</CustomLabel>
            </MenuOption>
          ))}
        </OptionsMenu>
      </CustomSelectBar>
      <InvalidLabel invalid={invalid}>{props.invalidMessage}</InvalidLabel>
    </Wrapper>
  );
};

export default Select;
