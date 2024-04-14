// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getMessaging} from 'firebase/messaging';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpKf7LcVyz8uPbhHzojfVq7WmbSE_Xkts",
  authDomain: "firstagm-b0094.firebaseapp.com",
  projectId: "firstagm-b0094",
  storageBucket: "firstagm-b0094.appspot.com",
  messagingSenderId: "37339568694",
  appId: "1:37339568694:web:746209597a08606ea8d697",
  measurementId: "G-NT1Z9B5XHZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const messaging = getMessaging(app);
export const storage = getStorage(app);
export {app,messaging,db};

