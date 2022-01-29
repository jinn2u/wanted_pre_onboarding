import { ReactNode } from 'react';
import { Wrapper } from './style';
import PropTypes from 'prop-types';
const TabItem = ({
  children,
  ...props
}: {
  handleClick?: () => void;
  active?: boolean;
  children: ReactNode;
}) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

TabItem.defaultProps = {
  __TYPE: 'tabItem',
};
export default TabItem;
