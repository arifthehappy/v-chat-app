import React from 'react';
import { useParams } from 'react-router';
import { IconButton, Icon, Modal, Button } from 'rsuite';
import { useCurrentRoom } from '../../../context/current-room.context';
import { useModalState } from '../../../misc/custom-hooks';
import { auth, database } from '../../../misc/firebase';

const AskFcmBtnModal = () => {
  const isReceivingFcm = useCurrentRoom(v => v.isReceivingFcm);
  const { isOpen, close, open } = useModalState();
  const { chatId } = useParams();

  const onCancel = () => {
    database
      .ref(`/rooms/${chatId}/fcmUsers`)
      .child(auth.currentUser.uid)
      .remove();
  };

  const onAccept = () => {
    database
      .ref(`/rooms/${chatId}/fcmUsers`)
      .child(auth.currentUser.uid)
      .set(true);
  };

  return (
    <>
      <IconButton
        icon={<Icon icon="podcast" />}
        color="blue"
        size="sm"
        circle
        onClick={open}
        appearance={isReceivingFcm ? 'default' : 'ghost'}
      />
      <Modal show={isOpen} onHide={close} size="xs" backdrop="static">
        <Modal.Header>
          <Modal.Title>Notifications permissions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isReceivingFcm ? (
            <div className="text-center">
              <Icon className="text-green mb-3" icon="check-circle" size="5x" />
              <h6>
                You are subscribed to messages sent by admins of this room.
              </h6>
            </div>
          ) : (
            <div className="text-center">
              <Icon
                className="text-blue mb-3"
                icon="question-circle"
                size="5x"
              />
              <h6>
                Do you want to subscribe to broadcast messages sent by admins of
                this room.
              </h6>
            </div>
          )}
          <p className="mt-2">
            To receive notification make sure to allow notification in your
            browser.
          </p>
          <p>
            Permission:{' '}
            {Notification.permission === 'granted' ? (
              <span className="text-green">Granted</span>
            ) : (
              <span className="text-red">Denied</span>
            )}
          </p>
        </Modal.Body>
        <Modal.Footer>
          {isReceivingFcm ? (
            <Button color="red" onClick={onCancel}>
              I change my mind
            </Button>
          ) : (
            <Button color="green" onClick={onAccept}>
              Subscribe
            </Button>
          )}
          <Button onClick={close}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AskFcmBtnModal;
