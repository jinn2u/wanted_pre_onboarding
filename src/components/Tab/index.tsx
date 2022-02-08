import React, { HTMLAttributes, ReactElement, useState } from 'react';
import { Wrapper } from './style';
import { useCloneElement } from './useCloneElement';
import { useIsTabActive } from './useTabActive';
import { filterValidChildren } from './utils';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  height?: number;
  bgColor?: string;
}
const Tab = ({ children, height = 50, bgColor = 'white', ...props }: Props) => {
  const [isTabActive, setIsTabActive] = useIsTabActive(children);
  const TabItems = useCloneElement(children, isTabActive, setIsTabActive);

  return (
    <Wrapper height={height} bgColor={bgColor} {...props}>
      {TabItems}
    </Wrapper>
  );
};
export default Tab;
