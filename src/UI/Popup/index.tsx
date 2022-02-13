import React from 'react';
import crossIcon from '../../assets/cross.png';
import { ButtonBGTypes } from '../../constants/buttonConstants';
import { GlobalValues } from '../../constants/globalConstants';
import Button from '../Button';
import * as UI from './styles';

interface IPopupProps {
  onClose: () => void;
  onSubmit: () => void;
  submitDisabled: boolean;
  children: any;
}

const Popup: React.FC<IPopupProps> = ({ onClose, onSubmit, submitDisabled, children }) => {
  return (
    <UI.PopupWrapper>
      <UI.Popup>
        <UI.ClosePopupWrapper onClick={onClose}>
          <UI.CrossIcon src={crossIcon} />
        </UI.ClosePopupWrapper>
        <UI.MainContent>{children}</UI.MainContent>
        <Button
          value={GlobalValues.ADD}
          onClick={onSubmit}
          bgType={ButtonBGTypes.POPUP}
          disabled={submitDisabled}
          fullWidth
        />
      </UI.Popup>
    </UI.PopupWrapper>
  );
};

export default Popup;
