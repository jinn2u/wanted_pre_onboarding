import styled from '@emotion/styled';

export const Wrapper = styled.div<{ height: number; bgColor: string }>`
  width: 100%;
  max-width: inherit;
  display: flex;
  height: ${({ height }) => height + 'px'};
  background-color: ${({ bgColor }) => bgColor};
`;
