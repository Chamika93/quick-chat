import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import firebase from 'firebase';


import { Home, Chat } from './pages';
import './index.css';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjQ0uszoXUKneQ1a9fPNBwcS28-4uRn0M",
  authDomain: "chat-app-f7b42.firebaseapp.com",
  projectId: "chat-app-f7b42",
  storageBucket: "chat-app-f7b42.appspot.com",
  messagingSenderId: "801887746136",
  appId: "1:801887746136:web:7122cc8b1fcba8af97f22d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:id" element={<Chat />} />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
