import Modal from 'react-modal';
import css from './ModalWindow.module.css';

import { useEffect } from 'react';
import Icon from '../Icon/Icon';

Modal.setAppElement('#root');

const ModalWindow = ({ modalIsOpen, onCloseModal, children }) => {
  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add(css.modalOpen);
    } else {
      document.body.classList.remove(css.modalOpen);
    }
  }, [modalIsOpen]);

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
          // padding: '40px',
          // paddingRight: '0',
          // overflow: 'hidden',
          zIndex: '20',
          width: '982px',
          margin: 'auto', // Center the modal
        },
      }}
    >
      <div className={css.modalContainer}>
        
        {children}
      </div>
    </Modal>
  );
};

export default ModalWindow;
