import { CloseBtn, Dim, Wrapper } from './style';
import ReactDOM from 'react-dom';
import { Dispatch, MutableRefObject, SetStateAction, useCallback, useEffect, useMemo } from 'react';
import { useClickAway } from './useClickAway';

interface Props {
  children: React.ReactNode;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
const ModalBase = ({ children, setIsModalOpen }: Props) => {
  const handleCloseBtn = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  const ref = useClickAway(handleCloseBtn);
  return (
    <Dim>
      <Wrapper ref={ref as MutableRefObject<HTMLDivElement>} className="modal">
        <CloseBtn type="button" onClick={handleCloseBtn}>
          x
        </CloseBtn>
        {children}
      </Wrapper>
    </Dim>
  );
};
const Modal = ({ children, setIsModalOpen }: Props) => {
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

  return ReactDOM.createPortal(
    <ModalBase setIsModalOpen={setIsModalOpen}>{children}</ModalBase>,
    el,
  );
};
export default Modal;
