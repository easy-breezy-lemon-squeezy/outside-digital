import styled, { css } from 'styled-components';

interface IInputStyleProps {
  length?: number;
  isError?: boolean;
}

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 8px;

  &:before {
    content: '₽';
    z-index: 1000;
    position: absolute;
    display: block;
    top: 36px;

    ${({ length }: IInputStyleProps) =>
      (length &&
        css`
          display: block;
          left: ${length * 7 + 15}px;
        `) ||
      (!length &&
        css`
          display: none;
        `)}
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: black;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  position: relative;
  transition: 0.25s;
  width: 100%;
  height: 40px;
  border: 1px solid #dfe3e6;
  border-radius: 3px;
  margin-bottom: 4px;
  padding-left: 10px;
  font-size: 14px;

  &::placeholder {
    color: #bec5cc;
  }

  &:hover {
    border: 1px solid #000000;
  }

  &:disabled {
    color: #808080;
    border: 1px solid #808080;
  }

  ${({ isError }: IInputStyleProps) =>
    isError &&
    css`
      border: 1px solid #ea0029;

      &:hover {
        border: 1px solid #ea0029;
      }
    `}
`;

export const ErrorText = styled.span`
  font-size: 10px;
  color: #ea0029;
`;
