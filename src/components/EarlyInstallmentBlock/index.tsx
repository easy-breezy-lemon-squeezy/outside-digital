import React, { useEffect, useState } from 'react';
import { GlobalValues } from '../../constants/globalConstants';
import { initializeContributeValues } from '../../helpers/initializeContributeValues';
import Checkbox from '../../UI/Checkbox';
import * as UI from './styles';

interface IEarlyInstallmentBlockProps {
  salary: string;
}

const EarlyInstallmentBlock: React.FC<IEarlyInstallmentBlockProps> = ({ salary }) => {
  const [contributionValues, setContributionValues] = useState<string[]>([]);

  useEffect(() => {
    if (salary) {
      const values: string[] = initializeContributeValues(salary);
      setContributionValues(values);
    }
  }, [salary]);

  return (
    <UI.BlockWrapper>
      <UI.Label>{GlobalValues.CAN_BE_MADE_AHEAD}</UI.Label>
      {contributionValues.map((value, index) => {
        return <Checkbox value={value} index={index + 1} key={`${value}_${index}`} />;
      })}
    </UI.BlockWrapper>
  );
};

export default EarlyInstallmentBlock;
