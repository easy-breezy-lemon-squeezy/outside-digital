import styled, { css } from 'styled-components';

interface ISelectableStyleProps {
  active: boolean;
}

export const WhatToReduceWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 40px;

  @media (max-width: 320px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const WhatToReduceText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: black;
`;

export const SelectBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 32px;

  @media (max-width: 320px) {
    margin-left: 0;
    margin-top: 24px;
  }
`;

export const Selectable = styled.div`
  transition: 0.25s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 12px;
  font-size: 14px;
  color: black;
  background: #eef0f2;
  border-radius: 50px;

  &:first-of-type {
    margin-right: 16px;
  }

  @media (max-width: 320px) {
    &:first-of-type {
      margin-right: 8px;
    }
  }

  ${({ active }: ISelectableStyleProps) =>
    active &&
    css`
      color: white;
      background: linear-gradient(255.35deg, #dc3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #ff5e56;
    `}
`;
