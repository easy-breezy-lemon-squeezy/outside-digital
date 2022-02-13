import React, { useState } from 'react';
import TaxDeductionPopup from '../../components/TaxDeductionPopup';
import { ButtonBGTypes } from '../../constants/buttonConstants';
import { GlobalValues } from '../../constants/globalConstants';
import Button from '../../UI/Button';
import * as UI from './styles';

const MainPage: React.FC = () => {
  const [popupVisible, setPopupVisible] = useState<boolean>(false);

  const openPopupHandler = () => {
    setPopupVisible(true);
  };

  const closePopupHandler = () => {
    setPopupVisible(false);
  };

  return (
    <UI.MainPage>
      <Button value={GlobalValues.TAX_DEDUCTION} onClick={openPopupHandler} bgType={ButtonBGTypes.MAIN} />
      {popupVisible && <TaxDeductionPopup onClose={closePopupHandler} />}
    </UI.MainPage>
  );
};

export default MainPage;
