import styled from 'styled-components';

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: black;

  @media (max-width: 320px) {
    line-height: 24px;
    padding-right: 35%;
  }
`;
