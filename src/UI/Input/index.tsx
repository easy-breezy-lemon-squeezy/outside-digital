import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { GlobalValues } from '../../constants/globalConstants';
import { convertToCurrency } from '../../helpers/convertToCurrency';
import * as UI from './styles';

interface IInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  label: string;
  placeholder: string;
}

const Input: React.FC<IInputProps> = ({ value, setValue, label, placeholder }) => {
  const [isError, setError] = useState<boolean>(false);
  const [isTyped, setTyped] = useState<boolean>(false);

  useEffect(() => {
    setError(false);

    if (value) {
      if (value.length > 1 && value[0] === '0') {
        setValue(value[0]);
      }

      return setTyped(true);
    }

    if (isTyped) {
      return setError(true);
    }
  }, [value]);

  const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(convertToCurrency(e.currentTarget.value));
  };

  const keyPressHandler = (e: any) => {
    if ((e.key >= 0 || e.key <= 9) && e.key !== ' ') {
      return true;
    }

    return e.preventDefault();
  };

  return (
    <UI.InputWrapper length={value.length}>
      <UI.Label>{label}</UI.Label>
      <UI.Input
        value={value}
        onChange={changeValueHandler}
        placeholder={placeholder}
        isError={isError}
        onKeyPress={keyPressHandler}
      />
      {isError && <UI.ErrorText>{GlobalValues.FIELD_REQUIRED}</UI.ErrorText>}
    </UI.InputWrapper>
  );
};

export default Input;
