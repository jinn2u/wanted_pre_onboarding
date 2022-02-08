import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Tag } from '../../components';
import { Container } from '../../style';

export default {
  title: 'Example/Tag',
  components: Tag,
  argTypes: {},
} as ComponentMeta<typeof Tag>;

export const Default: ComponentStory<typeof Tag> = (args) => {
  const [wordList, setWordList] = useState<string[]>([]);
  return (
    <Container>
      <Tag {...args} width={200} setWordList={setWordList} wordList={wordList} />
    </Container>
  );
};

export const FullWidth: ComponentStory<typeof Tag> = (args) => {
  const [wordList, setWordList] = useState<string[]>([]);
  return (
    <Container>
      <Tag {...args} width="100%" setWordList={setWordList} wordList={wordList} />
    </Container>
  );
};
