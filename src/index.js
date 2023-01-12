import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCW_1HQt9YeyyyNvx1viWCPk5IOqGfOCNw",
  authDomain: "indivar-deco.firebaseapp.com",
  projectId: "indivar-deco",
  storageBucket: "indivar-deco.appspot.com",
  messagingSenderId: "682793693243",
  appId: "1:682793693243:web:7330fb1c62b412454b2c1e"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

