import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: blue;
  border-radius: 5px;
  color: white;
  width: fit-content;
  padding: 5px 25px 5px 5px;
  position: relative;
`;
export const EraseBtn = styled.button`
  width: 15px;
  height: 15px;
  position: absolute;
  right: 3px;
  top: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: white;
  color: gray;
  border-radius: 50%;
  line-height: 5px;
  cursor: pointer;
`;
