import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Toggle } from '../../components';
import { Container } from '../../style';
export default {
  title: 'Example/Tag',
  component: Toggle,
  argTypes: {},
} as ComponentMeta<typeof Toggle>;

export const Default: ComponentStory<typeof Toggle> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Toggle {...args} name="토글 테스트" isToggled={open} setIsToggled={setOpen} />
      Toggle switch {open}
    </Container>
  );
};

export const ChangeWidth: ComponentStory<typeof Toggle> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Toggle {...args} name="토글 테스트" width={400} isToggled={open} setIsToggled={setOpen} />
      Toggle switch {open}
    </Container>
  );
};

export const ChangeHeight: ComponentStory<typeof Toggle> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Toggle {...args} name="토글 테스트" height={60} isToggled={open} setIsToggled={setOpen} />
      Toggle switch {open}
    </Container>
  );
};

export const ChangeWidthAndHeight: ComponentStory<typeof Toggle> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Toggle
        {...args}
        name="토글 테스트"
        width={400}
        height={100}
        isToggled={open}
        setIsToggled={setOpen}
      />
      Toggle switch {open}
    </Container>
  );
};
