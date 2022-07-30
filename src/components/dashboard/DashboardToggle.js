import React, { useCallback } from 'react';
import { Button, Icon, Drawer, Alert } from 'rsuite';
import { useMediaQuery, useModalState } from '../../misc/custom-hooks';
import Dashboard from '.';
import { auth } from '../../misc/firebase';

const DashboardToggle = () => {
  const { isOpen, close, open } = useModalState();
  const isDesktop = useMediaQuery('(min-width: 992px)');

  const onSignOut = useCallback(() => {
    try {
      auth.signOut();
      Alert.info('You have signed out successfully.', 4000);
      close();
    } catch (error) {
      Alert.error(error.message);
    }
  }, [close]);
  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" className="mr-1" />
        Dashboard
      </Button>
      <Drawer full={!isDesktop} show={isOpen} onHide={close} placement="left">
        <Dashboard onSignOut={onSignOut} />
      </Drawer>
    </>
  );
};

export default DashboardToggle;
