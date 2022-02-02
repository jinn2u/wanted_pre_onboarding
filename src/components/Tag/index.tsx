import { Input, Wrapper } from './style';
import React, { KeyboardEvent, useCallback, useState } from 'react';
import WordBox from './WrodBox';

interface Props {
  width?: number | string;

  fontSize?: number;
}
const Tag = ({ width = 400 }: Props) => {
  const [words, setWords] = useState<string[]>([]);

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    const { value } = e.target as HTMLInputElement;
    if (!value.length || e.key !== 'Enter') {
      return;
    }
    setWords((prevWords) => [...prevWords, value]);
    (e.target as HTMLInputElement).value = '';
  }, []);

  const onErase = useCallback((idx: number) => {
    setWords((prevWords) => prevWords.filter((_, index) => idx !== index));
  }, []);

  return (
    <>
      <Wrapper width={width}>
        <ul>
          {words.map((word, idx) => (
            <li key={idx}>
              <WordBox word={word} onErase={() => onErase(idx)} />
            </li>
          ))}
        </ul>
        <Input placeholder="Please enter to add tags" onKeyUp={handleKeyUp} />
      </Wrapper>
    </>
  );
};
export default Tag;
