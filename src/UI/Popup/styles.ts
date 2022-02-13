import styled from 'styled-components';

export const PopupWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
`;

export const Popup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: white;
  border-radius: 30px;
  width: 552px;
  padding: 32px;

  @media (max-width: 768px) {
    width: 453px;
  }

  @media (max-width: 320px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding: 16px;
    overflow: scroll;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-start;
`;

export const ClosePopupWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px;

  @media (max-width: 320px) {
    padding: 6px;
  }
`;

export const CrossIcon = styled.img`
  width: 18px;
  height: 18px;

  @media (max-width: 320px) {
    width: 12px;
    height: 12px;
  }
`;
