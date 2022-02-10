import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  MutableRefObject,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import { useClickAway } from '../../hooks/useClickAway';
import { Input, Li, Ul, Wrapper } from './style';
import {
  createMatchedData,
  defineNextDropdownIdx,
  findCurrentInputWord,
  findMatchedDataAndDefineModalIsOpenable,
  useUpdateInputAndCloseMated,
} from './utils';

interface Props {
  width?: number;
  cashedWordList: string[];
  setAutoCompleteInput: Dispatch<SetStateAction<string>>;
  autoCompleteInput: string;
  handleSubmit: () => void;
}
export type matchedType = { word: string; isSelected: boolean }[];

const AutoComplete = ({
  width = 300,
  cashedWordList,
  setAutoCompleteInput,
  autoCompleteInput,
  handleSubmit,
  ...props
}: Props) => {
  const [dropdownList, setDropdownList] = useState<{ word: string; isSelected: boolean }[]>([]);
  const [showMatched, setShowMatched] = useState(false);

  const ulRef = useClickAway(() => {
    showMatched && setShowMatched(false);
  }, [showMatched]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setAutoCompleteInput(value);

      if (!value.length) {
        setShowMatched(false);
        return setDropdownList([]);
      }

      findMatchedDataAndDefineModalIsOpenable(
        cashedWordList,
        value,
        setDropdownList,
        setShowMatched,
      );
    },
    [cashedWordList, createMatchedData, findMatchedDataAndDefineModalIsOpenable],
  );

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputValue = (e.target as HTMLInputElement).value;
    // 해당하는 키이벤트가 아니라면 종료
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Enter') return;
    // input에 값이 없다면 종료
    if (!inputValue) return;
    // 캐싱된 단어리스트가 없을 때, 윗키, 아랫키를 누른다면 종료
    if (!cashedWordList.length && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) return;
    if (inputValue && !dropdownList.length) return;
    const [idx, word] = findCurrentInputWord(dropdownList, inputValue);

    if (e.key === 'Enter') {
      useUpdateInputAndCloseMated(
        word,
        cashedWordList,
        setShowMatched,
        setAutoCompleteInput,
        setDropdownList,
        handleSubmit,
      );
      setShowMatched(false);
      return;
    }

    setShowMatched(true);
    const nextDropdownIdx = defineNextDropdownIdx(e.key, idx, dropdownList);
    setAutoCompleteInput(dropdownList[nextDropdownIdx].word);
    setDropdownList((prevMatched) =>
      prevMatched
        .map((match, index) =>
          index === nextDropdownIdx
            ? { ...match, isSelected: true }
            : { ...match, isSelected: false },
        )
        .slice(0, 10),
    );
  };

  const handleLiClick = (word: string) => {
    useUpdateInputAndCloseMated(
      word,
      cashedWordList,
      setShowMatched,
      setAutoCompleteInput,
      setDropdownList,
      handleSubmit,
    );
  };
  const handleClick = () => {
    if (!dropdownList.length) return;
    setShowMatched(true);
  };

  return (
    <Wrapper {...props}>
      <Input
        width={width}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        onClick={handleClick}
        value={autoCompleteInput}
      />
      {showMatched && (
        <Ul ref={ulRef as MutableRefObject<HTMLUListElement>} width={width}>
          {dropdownList.map(({ word, isSelected }) => (
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
