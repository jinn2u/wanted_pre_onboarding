import React, { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react';
import { Input, Li, Ul, Wrapper } from './style';

interface Props {
  width?: number;
}
const AutoComplete = ({ width = 300 }: Props) => {
  const [cashed, setCashed] = useState(['a', 'ab', 'abb', 'abbb', 'abbbb', 'abbbbb', 'abbbbbb']);
  const [matched, setMatched] = useState<{ word: string; isSelected: boolean }[]>([]);
  const [inputVal, setInputVal] = useState('');
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setInputVal(value);
      if (!value.length) {
        return;
      }
      const filteredCashes = cashed
        .filter((cash) => cash.includes(value))
        .map((word) => ({ word, isSelected: false }));

      setMatched(filteredCashes);
    },
    [cashed],
  );
  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'ArrowDown') {
      return;
    }
    if (e.key === 'ArrowDown') {
      const idx = matched.findIndex(({ word, isSelected }) => isSelected === true);
      const nextIdx = idx === -1 ? 0 : idx === matched.length - 1 ? 0 : idx + 1;

      setInputVal(matched[nextIdx].word);

      setMatched((prevMatched) =>
        prevMatched.map((match, index) =>
          index === nextIdx ? { ...match, isSelected: true } : { ...match, isSelected: false },
        ),
      );
    }
  };
  return (
    <Wrapper>
      <Input width={width} onChange={handleChange} onKeyUp={handleKeyUp} value={inputVal} />
      <Ul width={width}>
        {matched.map(({ word, isSelected }) => (
          <Li isSelected={isSelected} key={word}>
            {word}
          </Li>
        ))}
      </Ul>
    </Wrapper>
  );
};
export default AutoComplete;
