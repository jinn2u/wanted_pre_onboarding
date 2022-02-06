import React, { HTMLAttributes, ReactElement, ReactNode, useCallback, useState } from 'react';
import { Wrapper } from './style';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  height?: number;
  bgColor?: string;
}
const Tab = ({ children, height = 50, bgColor = 'white', ...props }: Props) => {
  const filterValidChildren = useCallback(
    (children: ReactNode) =>
      React.Children.toArray(children).filter(
        (element) => React.isValidElement(element) && element.props.__TYPE === 'tabItem',
      ),
    [],
  );
  const [isActive, setIsActive] = useState<number>(() => {
    const activeItem = filterValidChildren(children).map((element, idx) => {
      const item = element as ReactElement;
      if (item.props.active) {
        return idx;
      }
    });
    const activeIdx = activeItem.find((v) => v !== undefined);
    if (activeIdx !== undefined) {
      return activeIdx;
    }
    return 0;
  });

  const TabItems = filterValidChildren(children).map((element, idx) => {
    const item = element as ReactElement;
    return React.cloneElement(item, {
      ...item.props,
      className: idx === isActive ? 'active' : 'nonactive',
      onClick: () => {
        item.props.handleClick && item.props.handleClick();
        setIsActive(idx);
      },
    });
  });
  return (
    <Wrapper height={height} bgColor={bgColor} {...props}>
      {TabItems}
    </Wrapper>
  );
};
export default Tab;
