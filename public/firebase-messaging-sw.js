/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js'
);

firebase.initializeApp({
  apiKey: 'AIzaSyCwPwa0WgkxdL6GE_g2WmUN0XHjDVwlKtQ',
  authDomain: 'v-chat-app-b706d.firebaseapp.com',
  databaseURL: 'https://v-chat-app-b706d-default-rtdb.firebaseio.com',
  projectId: 'v-chat-app-b706d',
  storageBucket: 'v-chat-app-b706d.appspot.com',
  messagingSenderId: '550520261261',
  appId: '1:550520261261:web:8a05ff8bcd9796436ff0c4',
});

firebase.messaging();
