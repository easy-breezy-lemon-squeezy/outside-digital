import React from 'react';
import * as UI from './styles';

interface IButtonProps extends UI.IButtonStyleProps {
  value: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({ value, onClick, bgType, disabled, fullWidth }) => {
  return (
    <UI.Button onClick={onClick} bgType={bgType} disabled={disabled} fullWidth={fullWidth}>
      {value}
    </UI.Button>
  );
};

export default Button;
