import React, {
  ChangeEvent,
  KeyboardEvent,
  MutableRefObject,
  useCallback,
  useRef,
  useState,
} from 'react';
import { useClickAway } from '../Modal/useClickAway';
import { Input, Li, Ul, Wrapper } from './style';

interface Props {
  width?: number;
}
const AutoComplete = ({ width = 300 }: Props) => {
  const [cashed, setCashed] = useState(['a', 'ab', 'abb', 'abbb', 'abbbb', 'abbbbb', 'abbbbbb']);
  const [matched, setMatched] = useState<{ word: string; isSelected: boolean }[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [showMatched, setShowMatched] = useState(false);

  const closeMatchField = useCallback(() => {
    setShowMatched(false);
  }, []);
  const ulRef = useClickAway(closeMatchField);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setInputVal(value);
      if (!value.length) {
        setShowMatched(false);
        return setMatched([]);
      }
      const filteredCashes = cashed
        .filter((cash) => cash.includes(value))
        .map((word) => ({ word, isSelected: false }));
      setMatched(filteredCashes);
      if (filteredCashes.length) {
        setShowMatched(true);
      } else {
        setShowMatched(false);
      }
    },
    [cashed],
  );
  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') {
      return;
    }
    const idx = matched.findIndex(({ word, isSelected }) => isSelected === true);
    let nextIdx = 0;
    if (e.key === 'ArrowDown') {
      nextIdx = idx === -1 ? 0 : idx === matched.length - 1 ? 0 : idx + 1;
    } else {
      nextIdx = idx === -1 || idx === 0 ? matched.length - 1 : idx - 1;
    }
    setInputVal(matched[nextIdx].word);
    setMatched((prevMatched) =>
      prevMatched.map((match, index) =>
        index === nextIdx ? { ...match, isSelected: true } : { ...match, isSelected: false },
      ),
    );
  };
  return (
    <Wrapper>
      <Input width={width} onChange={handleChange} onKeyUp={handleKeyUp} value={inputVal} />
      {showMatched && (
        <Ul ref={ulRef as MutableRefObject<HTMLUListElement>} width={width}>
          {matched.map(({ word, isSelected }) => (
            <Li isSelected={isSelected} key={word}>
              {word}
            </Li>
          ))}
        </Ul>
      )}
    </Wrapper>
  );
};
export default AutoComplete;
