/* eslint-disable object-curly-spacing */
/* eslint-disable quotes */
const functions = require('firebase-functions');
const admin = require('firebase-admin');

const serviceAccount = require('./service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://v-chat-app-b706d-default-rtdb.firebaseio.com',
});

const { sendFcm } = require('./src/fcm');

exports.sendFcm = sendFcm;
