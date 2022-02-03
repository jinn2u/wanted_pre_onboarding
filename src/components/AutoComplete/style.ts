import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;
export const Input = styled.input<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  padding: 5px 0px 5px 5px;
  height: 30px;
  outline: none;
  border-radius: 10px;
  border: 1px solid lightgray;
`;
export const Ul = styled.ul<{ width: number }>`
  width: ${({ width }) => `${width + 5}px`};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid lightgray;
  top: 30px;
  padding: 0px;
  margin: 0px;
  list-style: none;
  position: absolute;
  z-index: 100;
`;

export const Li = styled.li<{ isSelected: boolean }>`
  padding: 0px 0px 0px 5px;
  margin: 0px;
  background-color: ${({ isSelected }) => (isSelected ? 'lightgray' : 'white')};
  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
  &:last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
