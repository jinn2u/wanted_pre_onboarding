import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { AutoComplete } from '../../components';
import { Container } from '../../style';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example/AutoComplete',
  component: AutoComplete,
  argTypes: {},
} as ComponentMeta<typeof AutoComplete>;

export const Default: ComponentStory<typeof AutoComplete> = (args) => {
  const [autoCompleteInput, setAutoCompleteInput] = useState('');
  const relatedWord = ['a', 'apple', 'pineapple', 'bear'];

  return (
    <Container>
      <AutoComplete
        {...args}
        relatedWord={relatedWord}
        setAutoCompleteInput={setAutoCompleteInput}
        autoCompleteInput={autoCompleteInput}
        handleSubmit={action(`${autoCompleteInput}이 submit되었습니다`)}
      />
    </Container>
  );
};

export const NoRelatedWord: ComponentStory<typeof AutoComplete> = (args) => {
  const [autoCompleteInput, setAutoCompleteInput] = useState('');
  const relatedWord: string[] = [];

  return (
    <Container>
      <AutoComplete
        {...args}
        relatedWord={relatedWord}
        setAutoCompleteInput={setAutoCompleteInput}
        autoCompleteInput={autoCompleteInput}
        handleSubmit={action(`${autoCompleteInput}이 submit되었습니다`)}
      />
    </Container>
  );
};

export const ChangeWidth: ComponentStory<typeof AutoComplete> = (args) => {
  const [autoCompleteInput, setAutoCompleteInput] = useState('');
  const relatedWord = ['a', 'apple', 'pineapple', 'bear'];

  return (
    <Container>
      <AutoComplete
        {...args}
        width={500}
        relatedWord={relatedWord}
        setAutoCompleteInput={setAutoCompleteInput}
        autoCompleteInput={autoCompleteInput}
        handleSubmit={action(`${autoCompleteInput}이 submit되었습니다`)}
      />
    </Container>
  );
};
