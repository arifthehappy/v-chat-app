import { getByText } from '@testing-library/react';
import React from 'react';
import { Whisper, Tooltip, Badge } from 'rsuite';
import { usePresence } from '../misc/custom-hooks';

const getColor = presence => {
  if (!presence) {
    return 'gray';
  }

  switch (presence.state) {
    case 'online':
      return 'green';
    case 'offline':
      return 'red';
    default:
      return 'gray';
  }
};

const getText = presence => {
  if (!presence) {
    return 'status unknown';
  }

  return presence.state === 'online'
    ? 'online'
    : `last seen ${new Date(presence.last_changed).toLocaleString()}`;
};

const PresenceDot = ({ uid }) => {
  const presence = usePresence(uid);

  return (
    <Whisper
      placement="top"
      controlId="control-id-hover"
      trigger="hover"
      speaker={<Tooltip>{getText(presence)}</Tooltip>}
      preventOverflow
    >
      <Badge
        className="cursor-pointer"
        style={{ background: getColor(presence) }}
      />
    </Whisper>
  );
};

export default PresenceDot;
