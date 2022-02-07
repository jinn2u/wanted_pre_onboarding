import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '../../components';
import { Container } from '../../style';

export default {
  title: 'Example/Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

export const Default: ComponentStory<typeof Modal> = (args) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Container>
      <button onClick={() => setModalOpen(true)}>모달 열기</button>
      {modalOpen && (
        <Modal {...args} setIsModalOpen={setModalOpen}>
          <div>Modal Inner</div>
        </Modal>
      )}
    </Container>
  );
};
export const InnerSetting: ComponentStory<typeof Modal> = (args) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Container>
      <button onClick={() => setModalOpen(true)}>모달 열기</button>
      {modalOpen && (
        <Modal {...args} setIsModalOpen={setModalOpen}>
          <div style={{ width: '500px', height: '300px', background: 'green' }}>Modal Inner</div>
        </Modal>
      )}
    </Container>
  );
};
export const PropsSetting: ComponentStory<typeof Modal> = (args) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Container>
      <button onClick={() => setModalOpen(true)}>모달 열기</button>
      {modalOpen && (
        <CuModal {...args} setIsModalOpen={setModalOpen}>
          <div style={{ width: '500px', height: '300px', background: 'green' }}>Modal Inner</div>
        </CuModal>
      )}
    </Container>
  );
};
const CuModal = styled(Modal)`
  padding: 0px;
`;
