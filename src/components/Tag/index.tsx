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

  return (
    <>
      <Wrapper width={width}>
        {words.map((word, idx) => (
          <div key={idx}>{word}</div>
        ))}
        <Input placeholder="Please enter to add tags" onKeyUp={handleKeyUp} />
        <WordBox word="texts" />
        <WordBox word="texts" />
      </Wrapper>
    </>
  );
};
export default Tag;
