import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBmRZqL2YTQ455ro-JR9--12ETND3PVbOQ',
  authDomain: 'react-auth-859e1.firebaseapp.com',
  projectId: 'react-auth-859e1',
  storageBucket: 'react-auth-859e1.appspot.com',
  messagingSenderId: '250184070470',
  appId: '1:250184070470:web:065fbb6f598e2cc560e147',
  measurementId: 'G-78N72VK296',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const persistance = firebase.auth.Auth.Persistence.SESSION;

export default persistance;
export const auth = firebase.auth();
