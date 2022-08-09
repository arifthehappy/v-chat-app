import React, { useCallback } from 'react';
import { ReactMic } from 'react-mic';
import { useParams } from 'react-router';
import { Alert, Icon, InputGroup } from 'rsuite';
import { storage } from '../../../misc/firebase';

const AudioMsgBtn = ({ afterUpload }) => {
  const [isRecording, setIsRecording] = React.useState(false);
  const [isUploading, setIsUploading] = React.useState(false);

  const { chatId } = useParams();

  const onUpload = useCallback(
    async data => {
      setIsUploading(true);
      try {
        const snap = await storage
          .ref(`/chat/${chatId}`)
          .child(`audio_${Date.now()}.mp3`)
          .put(data.blob, {
            cacheControl: `public, max-age=${60 * 60 * 24 * 7}`,
          });

        const file = {
          contentType: snap.metadata.contentType,
          name: snap.metadata.name,
          url: await snap.ref.getDownloadURL(),
        };

        setIsUploading(false);
        afterUpload([file]);
      } catch (error) {
        setIsUploading(false);
        Alert.error(error.message, 4000);
      }
    },
    [afterUpload, chatId]
  );

  const onClick = useCallback(() => {
    setIsRecording(p => !p);
  }, []);

  return (
    <InputGroup.Button
      onClick={onClick}
      disabled={isUploading}
      className={isRecording ? 'animate-blink' : ''}
    >
      <Icon icon="microphone" />
      <ReactMic
        record={isRecording}
        className="d-none"
        onStop={onUpload}
        mimeType="audio/mp3"
      />
    </InputGroup.Button>
  );
};

export default AudioMsgBtn;
