import styled from '@emotion/styled';

export const Dim = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10000;
`;
export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 20px 20px 20px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100001;
`;
export const CloseBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 20px;
`;
