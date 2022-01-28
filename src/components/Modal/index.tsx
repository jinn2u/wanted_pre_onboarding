import { Dim, Wrapper } from './style';
import ReactDOM from 'react-dom';
import { useEffect, useMemo } from 'react';
interface Props {
  children: React.ReactNode;
}
const ModalBase = ({ children }: Props) => {
  return (
    <Dim>
      <Wrapper>{children}</Wrapper>
    </Dim>
  );
};
const Modal = ({ children }: Props) => {
  const el = useMemo(() => {
    const $el = document.createElement('div');
    $el.className = 'portal-modal';
    return $el;
  }, []);
  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  });

  return ReactDOM.createPortal(<ModalBase>{children}</ModalBase>, el);
};
export default Modal;
