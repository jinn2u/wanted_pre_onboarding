import { EraseBtn, Wrapper } from './style';

interface Props {
  word: string;
}
const WordBox = ({ word }: Props) => {
  return (
    <Wrapper>
      <EraseBtn type="button">x</EraseBtn>
      {word}
    </Wrapper>
  );
};
export default WordBox;
