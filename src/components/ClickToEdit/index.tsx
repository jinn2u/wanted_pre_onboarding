import { ChangeEvent, Dispatch, MutableRefObject, SetStateAction, useState } from 'react';
import { useClickAway } from '../../hooks/useClickAway';
import { Input } from './style';

interface Props {
  setReflectInputValue: Dispatch<SetStateAction<string>>;
  width?: string | number;
  height?: string | number;
}
const ClickToEdit = ({ setReflectInputValue, width = 200, height = 40, ...props }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useClickAway(() => {
    setReflectInputValue(inputValue);
  }, [inputValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <Input
      {...props}
      width={width}
      height={height}
      ref={inputRef as MutableRefObject<HTMLInputElement>}
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};
export default ClickToEdit;
