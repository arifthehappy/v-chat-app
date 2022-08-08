/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Modal } from 'rsuite';
import { useModalState } from '../../../misc/custom-hooks';

const ImgBtnModal = ({ src, filename }) => {
  const { isOpen, close, open } = useModalState();

  return (
    <>
      <input
        type="image"
        src={src}
        alt="file"
        onClick={open}
        className="mw-100 mh-100 w-auto"
      />
      <Modal show={isOpen} onHide={close}>
        <Modal.Header>
          <Modal.Title>{filename}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img src={src} height="100%" width="100%" alt="file" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <a
            href=""
            download={src}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'teal',
              padding: 5,
              textAlign: 'center',
              borderRadius: 5,
              color: 'white',
              fontWeight: 'bold',
              textDecoration: 'none',
            }}
          >
            Download
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImgBtnModal;
