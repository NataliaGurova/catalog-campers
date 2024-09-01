import Modal from 'react-modal';
import css from './ModalWindow.module.css';

import { useEffect } from 'react';
import Icon from '../Icon/Icon';

Modal.setAppElement('#root');

const ModalWindow = ({ modalIsOpen, onCloseModal, children }) => {

   useEffect(() => {
    document.body.classList.add(css.modalOpen);

    return () => {
      document.body.classList.remove(css.modalOpen);
    };
  }, []);
  
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={css.modalWindow}
      style={{
        overlay: {
          backgroundColor: 'rgba(47, 47, 47, 0.6)',
        },
        content: {
          borderRadius: '20px',
          padding: '0',
          // paddingRight: '0',
          // overflow: 'hidden',
          zIndex: '20',
          width: '982px',
          margin: 'auto', // Center the modal
        },
      }}
    >
      <div className={css.modalContainer}>
        <button type="button" onClick={onCloseModal} className={css.btnClose}>
          <Icon id="xxx" width="32" height="32" className={css.btnX} />
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default ModalWindow;
