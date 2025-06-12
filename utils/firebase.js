// /utils/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB7rbXuhC0rbMW8yK24sX9Rx9Qvinuwb0",
  authDomain: "config-444cb.firebaseapp.com",
  projectId: "config-444cb",
  storageBucket: "config-444cb.appspot.com",
  messagingSenderId: "240337773323",
  appId: "1:240337773323:web:4843d915ef11b77e2f80e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
