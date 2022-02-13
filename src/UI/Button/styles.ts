import styled, { css } from 'styled-components';
import { ButtonBGTypes } from '../../constants/buttonConstants';
import { ButtonBGType } from '../../types/buttonTypes';

export interface IButtonStyleProps {
  fullWidth?: boolean;
  bgType: ButtonBGType;
}

export const Button = styled.button`
  transition: 0.25s;
  cursor: pointer;
  width: ${({ fullWidth }: IButtonStyleProps) => (fullWidth ? '100%' : '198px')};
  color: white;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #ffffff;
  border-radius: 6px;
  padding: 16px 0;

  @media (max-width: 320px) {
    padding: 12px 0;
    font-size: 12px;
    min-height: 40px;
    width: ${({ fullWidth }: IButtonStyleProps) => (fullWidth ? '100%' : '149px')};
  }

  ${({ bgType }: IButtonStyleProps) =>
    (bgType === ButtonBGTypes.MAIN &&
      css`
        background: none;

        &:hover {
          background: white;
          color: black;
        }
      `) ||
    (bgType === ButtonBGTypes.POPUP &&
      css`
        background: linear-gradient(255.35deg, #dc3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #ff5e56;
        box-shadow: 0px 0px 24px rgba(234, 0, 41, 0.33);
        border: none;
      `)}

  &:disabled {
    cursor: unset;
    background: #bec5cc;
    box-shadow: none;
    color: white;
    border: none;
  }
`;
