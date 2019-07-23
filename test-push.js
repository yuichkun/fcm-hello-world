import * as admin from 'firebase-admin';

console.log('app started');

admin.initializeApp(
  {
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://my-gearchange-dev.firebaseio.com"
  }
);


var message = {
  data: {
    score: '850',
    time: '2:45'
  },
  token: process.argv[2]
};

admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });