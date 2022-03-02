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
  apiKey: "AIzaSyCx5scdyWokdhTZM4TASYDa_vktofB9gTY",
  authDomain: "quick-chat-44d86.firebaseapp.com",
  projectId: "quick-chat-44d86",
  storageBucket: "quick-chat-44d86.appspot.com",
  messagingSenderId: "102198199648",
  appId: "1:102198199648:web:ab3fe3ece9ef2f6c0dca05"
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
