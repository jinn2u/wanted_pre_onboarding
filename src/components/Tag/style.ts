import styled from '@emotion/styled';

export const Wrapper = styled.div<{ width: number | string; height: number }>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) => `${height}px`};
  padding-left: 10px;
  box-sizing: border-box;
  border: 1px solid darkgray;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input<{ height: number }>`
  box-sizing: border-box;
  border-radius: 10px;
  height: ${({ height }) => `${height - 20}px`};
  border: none;
  outline: none;
`;
