import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAIE41Ey5DlijMn6DBmaxk-Dpbigwg_-Vs',
  authDomain: 'clone-bd963.firebaseapp.com',
  projectId: 'clone-bd963',
  storageBucket: 'clone-bd963.appspot.com',
  messagingSenderId: '395778602315',
  appId: '1:395778602315:web:0eaf3d50a32cea52eae4ce',
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const signUp = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return {
        user,
        error: null,
      };
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        user: null,
        error,
      };
      // ..
    });

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return {
        user,
        error: null,
      };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        user: null,
        error,
      };
    });
