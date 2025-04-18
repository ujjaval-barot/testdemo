import React, {useEffect, useRef, useState} from 'react';
import {InvalidLabel, LabelInput, SelectStyle, Wrapper} from 'components/input/input.styles';
import {InputWithMargin} from 'components/inputWithDropdown/inputWIthDropdown.styles';

interface InputWithDropdownProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  id: string;
  name: string;
  required: boolean;
  field: string;
  object: Record<string, unknown>;
  invalidMessage?: string;
  options: string[];
  otherTextInput?: boolean;
  otherTextInputPlaceholder?: string;
}

export const InputWithDropdown: React.FC<InputWithDropdownProps> = ({
  value,
  setValue,
  id,
  name,
  required,
  field,
  object,
  invalidMessage,
  options,
  otherTextInput,
  otherTextInputPlaceholder,
}): JSX.Element => {
  const [invalid, setInvalid] = useState(false);
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const textInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOtherSelected && textInputRef.current) {
      textInputRef.current.focus();
    }
  }, [isOtherSelected]);

  function onTextInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInvalid(false);
    const {value} = e.target;
    setValue({
      ...object,
      [field]: value,
    });
  }

  function onSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setInvalid(false);
    const {value} = e.target;
    setIsOtherSelected(value === 'Other');

    setValue({
      ...object,
      [field]: value === 'Other' ? '' : value,
    });
  }

  return (
    <div>
      <Wrapper>
        <InvalidLabel invalid={invalid}>{invalidMessage}</InvalidLabel>
        {isOtherSelected && (
          <InputWithMargin
            ref={textInputRef}
            placeholder={otherTextInputPlaceholder || 'Type value'}
            invalid={invalid}
            id={`$id-text`}
            type="text"
            onInvalid={() => {
              setInvalid(true);
            }}
            value={'Other' === value ? '' : value}
            onChange={onTextInputChange}
          />
        )}
        <SelectStyle
          invalid={invalid}
          id={id}
          required={required}
          onInvalid={() => {
            setInvalid(true);
          }}
          value={isOtherSelected ? 'Other' : value}
          onChange={onSelectChange}
        >
          <option value="" disabled selected>
            Choose option
          </option>
          {options.map(option => (
            <option key={option} value={option} selected={value === option}>
              {option}
            </option>
          ))}
          {otherTextInput && (
            <option key={'Other'} value={'Other'} selected={isOtherSelected}>
              Other
            </option>
          )}
        </SelectStyle>
        <LabelInput htmlFor={id}>{name}</LabelInput>
      </Wrapper>
    </div>
  );
};
