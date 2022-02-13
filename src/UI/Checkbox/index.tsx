import React, { useState } from 'react';
import { convertToCurrency } from '../../helpers/convertToCurrency';
import { convertToRubString } from '../../helpers/convertToRubString';
import * as UI from './styles';

interface ICheckboxProps {
  value: string;
  index: number;
}

const Checkbox: React.FC<ICheckboxProps> = ({ value, index }) => {
  const [checked, setChecked] = useState(false);

  return (
    <UI.CheckboxWrapper>
      <UI.CheckboxContainer>
        <UI.HiddenCheckbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
        <UI.StyledCheckbox checked={checked}>
          <UI.Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </UI.Icon>
        </UI.StyledCheckbox>
      </UI.CheckboxContainer>
      <UI.MainSignature>{convertToCurrency(value)} рублей</UI.MainSignature>
      <UI.SecondarySignature>{convertToRubString(index)}</UI.SecondarySignature>
    </UI.CheckboxWrapper>
  );
};

export default Checkbox;
