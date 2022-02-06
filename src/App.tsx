import { useState } from 'react';
import { Modal, Toggle, Tab, TabItem, Tag, AutoComplete, ClickToEdit } from './components';
import { Container, Wrapper } from './style';

const App = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tabs, setTabs] = useState(0);
  const [wordList, setWordList] = useState<string[]>([]);
  // useEffect로 가져온 캐쉬된 autoComplete 데이터
  const [relatedWord, setRelatedWord] = useState(['a', 'ab', 'abb', 'bab', 'abbbb']);
  const [autoCompleteInput, setAutoCompleteInput] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <Wrapper>
      <Container>
        <Toggle name="테스트" isToggled={isToggled} setIsToggled={setIsToggled} />
        <h1>Toggle Switch {isToggled ? 'on' : 'off'}</h1>
      </Container>
      <Container>
        <button
          type="button"
          onClick={() => {
            setIsModalOpen(true);
          }}
          style={{
            width: 'fit-content',
            borderRadius: '10px',
            backgroundColor: 'skyblue',
            border: 'none',
            padding: '20px',
          }}
        >
          모달을 클릭해 주세요
        </button>
        {isModalOpen && <Modal setIsModalOpen={setIsModalOpen}>테스트입니다!</Modal>}
      </Container>
      <Container>
        <Tab bgColor="lightgray" style={{ marginBottom: '10px' }}>
          <TabItem handleClick={() => setTabs(0)}>Tab1 Tab1</TabItem>
          <TabItem handleClick={() => setTabs(1)}>Tab2</TabItem>
          <TabItem handleClick={() => setTabs(2)}>Tab3</TabItem>
        </Tab>
        Tab Menu {tabs === 0 && 'one'}
        {tabs === 1 && 'two'}
        {tabs === 2 && 'three'}
      </Container>
      <Container>
        <Tag width={200} setWordList={setWordList} wordList={wordList} />
      </Container>
      <Container>
        <AutoComplete
          relatedWord={relatedWord}
          setAutoCompleteInput={setAutoCompleteInput}
          autoCompleteInput={autoCompleteInput}
          handleSubmit={() => console.log('AutoComplete Enter pushed!')}
        />
      </Container>
      <Container>
        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          이름 <ClickToEdit setReflectInputValue={setName} />
        </div>
        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          나이 <ClickToEdit setReflectInputValue={setAge} />
        </div>
        이름 {name} 나이 {age}
      </Container>
    </Wrapper>
  );
};
export default App;
