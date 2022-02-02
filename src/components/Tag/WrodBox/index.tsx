import { useCallback } from 'react';
import { EraseBtn, Wrapper } from './style';

interface Props {
  word: string;
  onErase: () => void;
}
const WordBox = ({ word, onErase }: Props) => {
  return (
    <Wrapper>
      <EraseBtn type="button" onClick={onErase}>
        x
      </EraseBtn>

      {word}
    </Wrapper>
  );
};
export default WordBox;
