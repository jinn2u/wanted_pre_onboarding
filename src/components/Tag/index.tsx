import { Input, Wrapper } from './style';
import { Dispatch, KeyboardEvent, SetStateAction, useCallback } from 'react';
import WordBox from './WordBox';

interface Props {
  width?: number | string;
  setWordList: Dispatch<SetStateAction<string[]>>;
  wordList: string[];
}
const Tag = ({ width = 400, setWordList, wordList, ...props }: Props) => {
  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    const { value } = e.target as HTMLInputElement;
    if (!value.length || e.key !== 'Enter') {
      return;
    }
    setWordList((prevWords) => [...prevWords, value]);
    (e.target as HTMLInputElement).value = '';
  }, []);

  const onErase = useCallback((idx: number) => {
    setWordList((prevWords) => prevWords.filter((_, index) => idx !== index));
  }, []);

  return (
    <Wrapper width={width} {...props}>
      <ul>
        {wordList.map((word, idx) => (
          <li key={idx}>
            <WordBox word={word} onErase={() => onErase(idx)} />
          </li>
        ))}
      </ul>
      <Input placeholder="Please enter to add tags" onKeyUp={handleKeyUp} />
    </Wrapper>
  );
};
export default Tag;
