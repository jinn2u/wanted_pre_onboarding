import styled from '@emotion/styled';

export const Input = styled.input<{ width: string | number; height: string | number }>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height)};
`;
