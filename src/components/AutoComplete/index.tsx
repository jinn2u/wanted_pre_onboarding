import React, {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  MutableRefObject,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import { useClickAway } from '../Modal/useClickAway';
import { Input, Li, Ul, Wrapper } from './style';
import { createMatchedData, useUpdateInputAndCloseMated } from './utils';

interface Props {
  width?: number;
  relatedWord: string[];
  setAutoCompleteInput: Dispatch<SetStateAction<string>>;
  autoCompleteInput: string;
  handleSubmit: () => void;
}
export type matchedType = { word: string; isSelected: boolean }[];
const AutoComplete = ({
  width = 300,
  relatedWord,
  setAutoCompleteInput,
  autoCompleteInput,
  handleSubmit,
}: Props) => {
  const [matched, setMatched] = useState<{ word: string; isSelected: boolean }[]>([]);
  const [showMatched, setShowMatched] = useState(false);

  const closeMatchField = useCallback(() => {
    setShowMatched(false);
  }, []);
  const ulRef = useClickAway(closeMatchField);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setAutoCompleteInput(value);

      if (!value.length) {
        setShowMatched(false);
        return setMatched([]);
      }

      const filteredCashes = createMatchedData(relatedWord, value);
      setMatched(filteredCashes);
      filteredCashes.length ? setShowMatched(true) : setShowMatched(false);
    },
    [relatedWord, createMatchedData],
  );

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Enter') {
      return;
    }
    if (!relatedWord.length || !showMatched) {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || !autoCompleteInput.length) return;
      return handleSubmit();
    }
    const idx = matched.findIndex(({ word, isSelected }) => isSelected === true);
    const word = idx === -1 ? (e.target as HTMLInputElement).value : matched[idx].word;

    if (e.key === 'Enter') {
      useUpdateInputAndCloseMated(
        word,
        relatedWord,
        setShowMatched,
        setAutoCompleteInput,
        setMatched,
      );
      handleSubmit();
      setShowMatched(false);
      return;
    }

    let nextIdx = 0;
    if (e.key === 'ArrowDown') {
      nextIdx = idx === -1 || idx === matched.length - 1 ? 0 : idx + 1;
    } else if (e.key === 'ArrowUp') {
      nextIdx = idx === -1 || idx === 0 ? matched.length - 1 : idx - 1;
    }
    setAutoCompleteInput(matched[nextIdx].word);
    setMatched((prevMatched) =>
      prevMatched.map((match, index) =>
        index === nextIdx ? { ...match, isSelected: true } : { ...match, isSelected: false },
      ),
    );
  };
  const handleLiClick = (word: string) => {
    useUpdateInputAndCloseMated(
      word,
      relatedWord,
      setShowMatched,
      setAutoCompleteInput,
      setMatched,
    );
    handleSubmit();
  };

  return (
    <Wrapper>
      <Input
        width={width}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        value={autoCompleteInput}
      />
      {showMatched && (
        <Ul ref={ulRef as MutableRefObject<HTMLUListElement>} width={width}>
          {matched.map(({ word, isSelected }) => (
            <Li isSelected={isSelected} key={word} onClick={() => handleLiClick(word)}>
              {word}
            </Li>
          ))}
        </Ul>
      )}
    </Wrapper>
  );
};
export default AutoComplete;
