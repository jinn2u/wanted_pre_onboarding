import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Tab, TabItem } from '../../components';
import { Container } from '../../style';

export default {
  title: 'Example/Tab',
  component: Tab,
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
} as ComponentMeta<typeof Tab>;

export const Default: ComponentStory<typeof Tab> = (args) => {
  const [tabs, setTabs] = useState(0);
  return (
    <>
      <Tab {...args} bgColor="lightgray" style={{ marginBottom: '10px' }}>
        <TabItem handleClick={() => setTabs(0)}>Tab1 Tab1</TabItem>
        <TabItem handleClick={() => setTabs(1)}>Tab2</TabItem>
        <TabItem handleClick={() => setTabs(2)}>Tab3</TabItem>
      </Tab>
      Tab Menu {tabs === 0 && 'one'}
      {tabs === 1 && 'two'}
      {tabs === 2 && 'three'}
    </>
  );
};
export const InvalidChildren: ComponentStory<typeof Tab> = (args) => {
  return (
    <>
      <Tab {...args} bgColor="lightgray" style={{ marginBottom: '10px' }}>
        <div>Text1</div>
      </Tab>
    </>
  );
};
export const SetWidth: ComponentStory<typeof Tab> = (args) => {
  const [tabs, setTabs] = useState(0);
  return (
    <>
      <Tab {...args} bgColor="lightgray" style={{ width: '300px' }}>
        <TabItem handleClick={() => setTabs(0)}>Tab1 Tab1</TabItem>
        <TabItem handleClick={() => setTabs(1)}>Tab2</TabItem>
      </Tab>
      Tab Menu {tabs === 0 && 'one'}
      {tabs === 1 && 'two'}
      {tabs === 2 && 'three'}
    </>
  );
};

export const TabOverFlow: ComponentStory<typeof Tab> = (args) => {
  const [tabs, setTabs] = useState(0);
  return (
    <>
      <Tab {...args} bgColor="lightgray" style={{ width: '300px' }}>
        <TabItem handleClick={() => setTabs(0)}>
          Tab1 Tab1Tab1 Tab1Tab1 Tab1Tab1 Tab1Tab1 Tab1Tab1 Tab1Tab1 Tab1Tab1 Tab1Tab1 Tab1Tab1
          Tab1Tab1 Tab1Tab1 Tab1Tab1 Tab1Tab1 Tab1Tab1 Tab1Tab1 Tab1Tab1 Tab1Tab1 Tab1Tab1 Tab1Tab1
          Tab1Tab1 Tab1Tab1 Tab1Tab1 Tab1Tab1 Tab1Tab1 Tab1Tab1 Tab1Tab1 Tab1Tab1 Tab1Tab1 Tab1Tab1
          Tab1Tab1 Tab1Tab1 Tab1Tab1 Tab1
        </TabItem>
        <TabItem handleClick={() => setTabs(1)}>Tab2</TabItem>
      </Tab>
      Tab Menu {tabs === 0 && 'one'}
      {tabs === 1 && 'two'}
      {tabs === 2 && 'three'}
    </>
  );
};
