import { Dispatch, ReactChild, ReactElement, ReactNode, SetStateAction, useState } from 'react';
import { filterValidChildren } from './utils';

export const useIsTabActive = (children: ReactNode): [number, Dispatch<SetStateAction<number>>] => {
  const [isTabActive, setIsTabActive] = useState<number>(() => {
    const activeItem = filterValidChildren(children).map((element, idx) => {
      const item = element as ReactElement;
      if (item.props.active) return idx;
    });
    const activeIdx = activeItem.find((v) => v !== undefined);
    if (activeIdx !== undefined) return activeIdx;
    return 0;
  });
  return [isTabActive, setIsTabActive];
};
