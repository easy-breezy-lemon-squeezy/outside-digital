import styled from 'styled-components';

export const HeaderText = styled.h1`
  font-size: 28px;
  margin-bottom: 16px;

  @media (max-width: 320px) {
    font-size: 18px;
    margin-top: 16px;
  }
`;

export const DescriptionText = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: #808080;
  margin-bottom: 24px;

  @media (max-width: 320px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const CalculateText = styled.p`
  transition: 0.25s;
  cursor: pointer;
  color: #ea0029;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    color: #f53a31;
  }
`;
