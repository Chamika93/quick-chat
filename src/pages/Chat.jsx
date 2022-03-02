import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import firebase from "firebase";

import { NewMessageForm, MessageList } from '../components';

const Chat = () => {

    let { id } = useParams();
    const [ user, setUser ] = useState('');

    const db = firebase.firestore();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user.uid);
      }
    });


    const [ messages, setMessages ] = useState([]);

    db.collection("chats").doc(id).collection("messages").onSnapshot((querySnapshot) => {
      let allMsgs = [];
      querySnapshot.forEach((doc) => {
          allMsgs.push(doc.data().text);
      });
      setMessages(allMsgs);
    });


    const messageRef = db.collection("chats").doc(id).collection("messages").doc();

    const onSendHandler = (message) => {
      messageRef.set({
        text: message,
        user,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      // setMessages([...messages, message]);
    }

    return (
      <div className="container mx-auto py-10 h-screen">
          <div className="w-2/4 mx-auto relative h-full">
            <div className='absolute bottom-0 w-full'>
              <MessageList messages={messages} />
              <NewMessageForm onSend={onSendHandler} />
            </div>
          </div>
      </div>
    );
  }
  
  export default Chat;
  