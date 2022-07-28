import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCwPwa0WgkxdL6GE_g2WmUN0XHjDVwlKtQ',
  authDomain: 'v-chat-app-b706d.firebaseapp.com',
  projectId: 'v-chat-app-b706d',
  storageBucket: 'v-chat-app-b706d.appspot.com',
  messagingSenderId: '550520261261',
  appId: '1:550520261261:web:8a05ff8bcd9796436ff0c4',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
