import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { AutoComplete } from '../../components';
import { Container } from '../../style';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example/AutoComplete',
  component: AutoComplete,
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <Container>
          <Story />
        </Container>
      );
    },
  ],
} as ComponentMeta<typeof AutoComplete>;

export const Default: ComponentStory<typeof AutoComplete> = (args) => {
  const [autoCompleteInput, setAutoCompleteInput] = useState('');
  const relatedWord = ['a', 'apple', 'pineapple', 'bear'];

  return (
    <AutoComplete
      {...args}
      relatedWord={relatedWord}
      setAutoCompleteInput={setAutoCompleteInput}
      autoCompleteInput={autoCompleteInput}
      handleSubmit={action(`${autoCompleteInput}이 submit되었습니다`)}
    />
  );
};

export const NoRelatedWord: ComponentStory<typeof AutoComplete> = (args) => {
  const [autoCompleteInput, setAutoCompleteInput] = useState('');
  const relatedWord: string[] = [];

  return (
    <AutoComplete
      {...args}
      relatedWord={relatedWord}
      setAutoCompleteInput={setAutoCompleteInput}
      autoCompleteInput={autoCompleteInput}
      handleSubmit={action(`${autoCompleteInput}이 submit되었습니다`)}
    />
  );
};

export const ChangeWidth: ComponentStory<typeof AutoComplete> = (args) => {
  const [autoCompleteInput, setAutoCompleteInput] = useState('');
  const relatedWord = ['a', 'apple', 'pineapple', 'bear'];

  return (
    <AutoComplete
      {...args}
      width={500}
      relatedWord={relatedWord}
      setAutoCompleteInput={setAutoCompleteInput}
      autoCompleteInput={autoCompleteInput}
      handleSubmit={action(`${autoCompleteInput}이 submit되었습니다`)}
    />
  );
};
