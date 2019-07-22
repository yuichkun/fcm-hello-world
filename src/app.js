import * as firebase from "firebase/app";
import "firebase/messaging";
import config from '../firebase.config'
firebase.initializeApp(config);

const messaging = firebase.messaging();