import React, { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react';
import { Input, Li, Ul, Wrapper } from './style';

interface Props {
  width?: number;
}
const AutoComplete = ({ width = 300 }: Props) => {
  const [cashed, setCashed] = useState(['a', 'ab', 'b']);
  const [matched, setMatched] = useState<{ word: string; isSelected: boolean }[]>([]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (!value.length) {
        return setMatched([]);
      }
      const filteredCashes = cashed
        .filter((cash) => cash.includes(value))
        .map((word) => ({ word, isSelected: false }));

      setMatched(filteredCashes);
      console.log('click');
    },
    [cashed],
  );
  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'ArrowDown') {
      return;
    }
    const idx = matched.findIndex(({ word, isSelected }) => isSelected === true);
    let changeMatch;
    if (idx === -1) {
      changeMatch = matched.map((match, index) =>
        index === 0 ? { ...match, isSelected: true } : { ...match, isSelected: false },
      );
    } else {
      changeMatch = matched.map((match, index) =>
        index === idx + 1 ? { ...match, isSelected: true } : { ...match, isSelected: false },
      );
    }
    setMatched(changeMatch);
  };
  return (
    <Wrapper>
      <Input width={width} onChange={handleChange} onKeyUp={handleKeyUp} />
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
