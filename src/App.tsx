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
        <Toggle
          name="테스트"
          isToggled={isToggled}
          setIsToggled={setIsToggled}
          width={50}
          height={20}
        />
        <h5>Toggle Switch {isToggled ? 'on' : 'off'}</h5>
      </Container>
      <Container>
        <button
          type="button"
          onClick={() => {
            setIsModalOpen(true);
          }}
          style={{
            width: 'fit-content',
            borderRadius: '30px',
            backgroundColor: 'blue',
            border: 'none',
            padding: '20px',
            color: 'white',
          }}
        >
          Open Modal
        </button>
        {isModalOpen && <Modal setIsModalOpen={setIsModalOpen}>HELLO CODESTATES!</Modal>}
      </Container>
      <Container>
        <Tab bgColor="lightgray" style={{ marginBottom: '10px' }}>
          <TabItem handleClick={() => setTabs(0)}>Tab1</TabItem>
          <TabItem handleClick={() => setTabs(1)}>Tab2</TabItem>
          <TabItem handleClick={() => setTabs(2)}>Tab3</TabItem>
        </Tab>
        Tab Menu {tabs === 0 && 'one'}
        {tabs === 1 && 'two'}
        {tabs === 2 && 'three'}
      </Container>
      <Container>
        <Tag width={400} setWordList={setWordList} wordList={wordList} />
      </Container>
      <Container>
        <h5>a,,b와 관련된 단어만 있습니다. 테스트하려면 a또는 b를 입력해 주세요.</h5>
        <AutoComplete
          relatedWord={relatedWord}
          setAutoCompleteInput={setAutoCompleteInput}
          autoCompleteInput={autoCompleteInput}
          handleSubmit={() => console.log('AutoComplete Enter pushed!')}
        />
      </Container>
      <Container>
        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          이름 <ClickToEdit setReflectInputValue={setName} height={20} width={100} />
        </div>
        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          나이 <ClickToEdit setReflectInputValue={setAge} height={20} width={100} />
        </div>
        이름 {name} 나이 {age}
      </Container>
    </Wrapper>
  );
};
export default App;
