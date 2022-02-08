import { CloseBtn, Dim, Wrapper } from './style';
import ReactDOM from 'react-dom';
import { Dispatch, MutableRefObject, SetStateAction, useCallback, useEffect, useMemo } from 'react';
import { useClickAway } from './useClickAway';

interface Props {
  children: React.ReactNode;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalBase = ({ children, setIsModalOpen, ...props }: Props) => {
  const handleCloseBtn = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  const ref = useClickAway(handleCloseBtn);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <Dim>
      <Wrapper className="modal" ref={ref as MutableRefObject<HTMLDivElement>} {...props}>
        <CloseBtn type="button" onClick={handleCloseBtn}>
          x
        </CloseBtn>
        {children}
      </Wrapper>
    </Dim>
  );
};
const Modal = ({ children, setIsModalOpen, ...props }: Props) => {
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
    <ModalBase {...props} setIsModalOpen={setIsModalOpen}>
      {children}
    </ModalBase>,
    el,
  );
};
export default Modal;
