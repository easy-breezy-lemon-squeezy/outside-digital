import React, { useState } from 'react';
import { GlobalValues } from '../../constants/globalConstants';
import * as UI from './styles';

const WhatToReduceBlock: React.FC = () => {
  const [paymentActive, setPaymentActive] = useState<boolean>(true);
  const [termActive, setTermActive] = useState<boolean>(false);

  const setPaymentActiveHandler = () => {
    setPaymentActive(true);
    setTermActive(false);
  };

  const setTermActiveHandler = () => {
    setTermActive(true);
    setPaymentActive(false);
  };

  return (
    <UI.WhatToReduceWrapper>
      <UI.WhatToReduceText>{GlobalValues.WHAT_TO_REDUCE}</UI.WhatToReduceText>
      <UI.SelectBlock>
        <UI.Selectable onClick={setPaymentActiveHandler} active={paymentActive}>
          {GlobalValues.PAYMENT}
        </UI.Selectable>
        <UI.Selectable onClick={setTermActiveHandler} active={termActive}>
          {GlobalValues.TERM}
        </UI.Selectable>
      </UI.SelectBlock>
    </UI.WhatToReduceWrapper>
  );
};

export default WhatToReduceBlock;
