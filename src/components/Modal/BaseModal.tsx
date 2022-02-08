import { useClickAway } from '../../hooks/useClickAway';
import { usePreventScroll } from './usePreventScroll';
import { CloseBtn, Dim, Wrapper } from './style';
import { MutableRefObject, useCallback } from 'react';
import { Props } from '.';

const BaseModal = ({ children, setIsModalOpen, ...props }: Props) => {
  usePreventScroll();

  const handleCloseBtn = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  const ref = useClickAway(handleCloseBtn);

  return (
    <Dim>
      <Wrapper
        tabIndex={0}
        className="modal"
        ref={ref as MutableRefObject<HTMLDivElement>}
        {...props}
      >
        <CloseBtn type="button" onClick={handleCloseBtn}>
          x
        </CloseBtn>
        {children}
      </Wrapper>
    </Dim>
  );
};
export default BaseModal;
