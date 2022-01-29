import { ReactNode } from 'react';
import { Wrapper } from './style';

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
export default TabItem;
