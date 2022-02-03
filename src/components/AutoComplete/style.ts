import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;
export const Input = styled.input<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  height: 30px;
  outline: none;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-sizing: border-box;
`;
export const Ul = styled.ul<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  border-radius: 10px;
  border: 1px solid lightgray;
  top: 30px;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  list-style: none;
  position: absolute;
  z-index: 100;
  display: none;
`;

export const Li = styled.li<{ isSelected: boolean }>`
  background-color: ${({ isSelected }) => (isSelected ? 'lightgray' : 'white')};
  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;
