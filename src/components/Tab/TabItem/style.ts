import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  &: hover {
    background-color: rgba(65, 105, 225, 0.7);
  }
  &.active {
    background-color: rgba(65, 105, 225);
  }
`;
