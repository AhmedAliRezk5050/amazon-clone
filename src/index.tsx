import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer, { initialState } from './context/reducer';
import StateProvider from './context/StateProvider';
import './firebase/firebase';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

/*
* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIE41Ey5DlijMn6DBmaxk-Dpbigwg_-Vs",
  authDomain: "clone-bd963.firebaseapp.com",
  projectId: "clone-bd963",
  storageBucket: "clone-bd963.appspot.com",
  messagingSenderId: "395778602315",
  appId: "1:395778602315:web:0eaf3d50a32cea52eae4ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*
* */
