import { Notification as Toast } from 'rsuite';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';
import { isLocalhost } from './helpers';

const config = {
  apiKey: 'AIzaSyCwPwa0WgkxdL6GE_g2WmUN0XHjDVwlKtQ',
  authDomain: 'v-chat-app-b706d.firebaseapp.com',
  databaseURL: 'https://v-chat-app-b706d-default-rtdb.firebaseio.com',
  projectId: 'v-chat-app-b706d',
  storageBucket: 'v-chat-app-b706d.appspot.com',
  messagingSenderId: '550520261261',
  appId: '1:550520261261:web:8a05ff8bcd9796436ff0c4',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
export const functions = app.functions('europe-west3');

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    'BKga3jO3FyVFMxevRsCWY1g-Q9nifdE8vdex5jWm83lvYQDbLKpshmqtUtqtNgQqtvYIcWwYuMg93uR-d_I2hdI'
  );

  messaging.onMessage(({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  functions.useFunctionsEmulator('http://localhost:5001');
}
