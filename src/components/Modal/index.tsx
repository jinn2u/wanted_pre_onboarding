import ReactDOM from 'react-dom';
import { Dispatch, SetStateAction } from 'react';
import BaseModal from './BaseModal';
import { useCreateElement } from './useCreateElement';

export interface Props {
  children: React.ReactNode;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ children, setIsModalOpen, ...props }: Props) => {
  const el = useCreateElement('portal-modal');

  return ReactDOM.createPortal(
    <BaseModal {...props} setIsModalOpen={setIsModalOpen}>
      {children}
    </BaseModal>,
    el,
  );
};
export default Modal;
