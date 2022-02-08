import React, { ReactNode } from 'react';

export const filterValidChildren = (children: ReactNode) =>
  React.Children.toArray(children).filter(
    (element) => React.isValidElement(element) && element.props.__TYPE === 'tabItem',
  );
