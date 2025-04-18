import React from 'react';
import {useState} from 'react';

import {UploadInput, UploadLabel, InvalidLabel} from './uploadButton.styles';

interface HeaderProps {
  setValue: React.Dispatch<React.SetStateAction<any>>;
  name: string;
  object: Record<string, unknown>;
  field: string;
  required: boolean;
  id: string;
  invalidMessage?: string;
}

export const UploadButton: React.FC<HeaderProps> = (props): JSX.Element => {
  const [invalid, setInvalid] = useState(false);

  const onChangePicture = (e: any) => {
    const value = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(value);
    reader.onload = function () {
      props.setValue({
        ...props.object,
        [props.field]: reader.result,
      });
      setInvalid(false);
    };
    props.setValue(value);
  };

  return (
    <React.Fragment>
      <UploadInput
        name={props.name}
        required={props.required}
        accept="application/msword, application/pdf"
        id={props.id}
        type="file"
        onChange={e => onChangePicture(e)}
        onInvalid={() => setInvalid(true)}
      />
      <UploadLabel htmlFor={props.id}>Attach Documents</UploadLabel>
      <InvalidLabel invalid={invalid}>{props.invalidMessage}</InvalidLabel>
    </React.Fragment>
  );
};

export default UploadButton;
