import styled from '@emotion/styled';

export const Wrapper = styled.div<{ width: number | string }>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid gray;
  flex-wrap: wrap;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  border-radius: 10px;
  border: none;
  outline: none;
`;
