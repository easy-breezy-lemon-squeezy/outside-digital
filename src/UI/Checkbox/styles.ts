import styled from 'styled-components';

interface ICheckboxStyleProps {
  checked?: boolean;
}

export const CheckboxWrapper = styled.label`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #dfe3e6;
  width: 100%;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  clip: rect(0 0 0 0);
  position: absolute;
  width: 1px;
`;

export const StyledCheckbox = styled.div<ICheckboxStyleProps>`
  width: 20px;
  height: 20px;
  background: ${({ checked }) =>
    checked ? 'linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;' : 'white'};
  border-radius: 6px;
  transition: 0.25s;
  border: ${({ checked }) => (checked ? 'none' : '1px solid #dfe3e6;')};

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;

export const MainSignature = styled.span`
  font-size: 14px;
  color: black;
`;

export const SecondarySignature = styled.span`
  font-size: 14px;
  margin-left: 5px;
  color: rgb(128, 128, 128);
`;
