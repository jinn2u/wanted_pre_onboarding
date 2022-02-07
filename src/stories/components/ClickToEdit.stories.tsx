import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { ClickToEdit } from '../../components';
import { Container } from '../../style';

export default {
  title: 'Example/ClickToEdit',
  component: ClickToEdit,
  argTypes: {},
} as ComponentMeta<typeof ClickToEdit>;

export const Default: ComponentStory<typeof ClickToEdit> = (args) => {
  const [reflectInputValue, setReflectInputValue] = useState('');
  return (
    <Container>
      <ClickToEdit {...args} setReflectInputValue={setReflectInputValue} />
      결과: {reflectInputValue}
    </Container>
  );
};

export const MultiComponent: ComponentStory<typeof ClickToEdit> = (args) => {
  const [inp1, setInp1] = useState('');
  const [inp2, setInp2] = useState('');
  return (
    <Container>
      <ClickToEdit {...args} setReflectInputValue={setInp1} />
      <ClickToEdit {...args} setReflectInputValue={setInp2} />
      <p>결과1: {inp1}</p>
      <p>결과2: {inp2}</p>
    </Container>
  );
};
export const FullWidth: ComponentStory<typeof ClickToEdit> = (args) => {
  const [reflectInputValue, setReflectInputValue] = useState('');
  return (
    <Container>
      <CuClickToEdit {...args} width="100%" setReflectInputValue={setReflectInputValue} />
      결과: {reflectInputValue}
    </Container>
  );
};
const CuClickToEdit = styled(ClickToEdit)`
  box-sizing: border-box;
`;
