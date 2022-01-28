import styled from '@emotion/styled';

export const Input = styled.input<{ height: number; width: number }>`
  display: none;
  &:checked + div {
    &::after {
      left: ${({ height }) => `calc(100% - ${height * 0.8 + height * 0.1}px)`};
    }
    &::before {
      width: 100%;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
    }
  }
`;

export const Wrapper = styled.div<{ width: number; height: number }>`
  position: relative;
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  background-color: lightgrey;
  border-radius: 50px;
  &::after {
    content: '';
    position: absolute;
    left: ${({ height }) => `${(height * 0.2) / 2}px`};
    bottom: ${({ height }) => `${(height * 0.2) / 2}px`};
    width: ${({ height }) => `${height * 0.8}px`};
    height: ${({ height }) => `${height * 0.8}px`};
    background-color: white;
    border-radius: 50%;
    transition: left 0.2s ease-out;
  }
  &::before {
    content: '';
    position: absolute;
    background-color: blue;
    left: 0;
    bottom: 0;
    height: inherit;
    width: 0;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    transition: all 0.2s;
    transition-timing-function: linear;
  }
`;
