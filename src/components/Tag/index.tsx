import { Input, Wrapper } from './style';
import React from 'react';
import WordBox from './WrodBox';

interface Props {
  width?: number | string;
  height?: number;
  fontSize?: number;
}
const Tag = ({ width = 400, height = 50 }: Props) => {
  return (
    <>
      <Wrapper width={width} height={height}>
        <Input height={height} placeholder="Please enter to add tags" />
        <WordBox word="texts" />
        <WordBox word="texts" />
      </Wrapper>
    </>
  );
};
export default Tag;
