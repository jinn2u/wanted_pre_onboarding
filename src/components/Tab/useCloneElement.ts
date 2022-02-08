import React, { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';
import { filterValidChildren } from './utils';

export const useCloneElement = (
  children: ReactNode,
  isTabActive: number,
  setIsTabActive: Dispatch<SetStateAction<number>>,
) =>
  filterValidChildren(children).map((element, idx) => {
    const item = element as ReactElement;
    return React.cloneElement(item, {
      ...item.props,
      className: idx === isTabActive ? 'active' : 'nonactive',
      onClick: () => {
        item.props.handleClick && item.props.handleClick();
        setIsTabActive(idx);
      },
    });
  });
