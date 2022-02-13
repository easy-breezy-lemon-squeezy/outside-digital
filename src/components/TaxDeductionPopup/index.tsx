import React, { useState } from 'react';
import { GlobalValues } from '../../constants/globalConstants';
import Input from '../../UI/Input';
import Popup from '../../UI/Popup';
import EarlyInstallmentBlock from '../EarlyInstallmentBlock';
import WhatToReduceBlock from '../WhatToReduceBlock';
import * as UI from './styles';

interface ITaxDeductionPopupProps {
  onClose: () => void;
}

const TaxDeductionPopup: React.FC<ITaxDeductionPopupProps> = ({ onClose }) => {
  const [salary, setSalary] = useState<string>('');
  const [calculatedSalary, setCalculatedSalary] = useState<string>('');
  const [valuesVisible, setValuesVisible] = useState<boolean>(false);

  const calculateHandler = () => {
    if (salary) {
      setValuesVisible(true);
      setCalculatedSalary(salary);
    }
  };

  const onSubmit = () => {};

  return (
    <Popup onClose={onClose} onSubmit={onSubmit} submitDisabled={!valuesVisible}>
      <UI.HeaderText>{GlobalValues.TAX_DEDUCTION}</UI.HeaderText>
      <UI.DescriptionText>{GlobalValues.TAX_DEDUCTION_DESCRIPTION}</UI.DescriptionText>
      <Input
        value={salary}
        setValue={setSalary}
        label={GlobalValues.MONTHLY_SALARY}
        placeholder={GlobalValues.ENTER_DATA}
      />
      <UI.CalculateText onClick={calculateHandler}>{GlobalValues.CALCULATE}</UI.CalculateText>
      {valuesVisible && <EarlyInstallmentBlock salary={calculatedSalary} />}
      <WhatToReduceBlock />
    </Popup>
  );
};

export default TaxDeductionPopup;
