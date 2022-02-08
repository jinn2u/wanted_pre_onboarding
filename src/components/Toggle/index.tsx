import { Dispatch, SetStateAction, useCallback, useRef } from 'react';
import { Input, Wrapper } from './style';

export interface Props {
  name: string;
  height?: number;
  width?: number;
  isToggled: boolean;
  setIsToggled: Dispatch<SetStateAction<boolean>>;
}
const Toggle = ({ name, width = 200, height = 50, isToggled, setIsToggled, ...args }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleInput = useCallback(() => {
    setIsToggled((prevVal) => !prevVal);
  }, []);

  return (
    <label>
      <Input
        {...args}
        name={name}
        ref={inputRef}
        type="checkbox"
        width={width}
        height={height}
        checked={isToggled}
        onChange={handleInput}
      />
      <Wrapper width={width} height={height} />
    </label>
  );
};
export default Toggle;
