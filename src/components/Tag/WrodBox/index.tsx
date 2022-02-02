import { Wrapper } from './style';

interface Props {
  word: string;
}
const WordBox = ({ word }: Props) => {
  return <Wrapper>{word}</Wrapper>;
};
export default WordBox;
