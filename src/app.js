import * as firebase from "firebase/app";
import "firebase/messaging";
import config from '../firebase.config'
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.usePublicVapidKey(process.env.VAPID)

Notification.requestPermission().then(async (permission) => {
  if (permission === 'granted') {
    console.log('Notification permission granted.');
    const token = await messaging.getToken();
    console.log(token);
  } else {
    console.log('Unable to get permission to notify.');
  }
});

messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
});