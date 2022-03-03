import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import firebase from "firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';

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

    const messagesRef = db.collection("chats").doc(id).collection("messages");
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });

    const messageRef = db.collection("chats").doc(id).collection("messages").doc();

    const onSendHandler = (message) => {
      messageRef.set({
        text: message,
        user,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
    }

    return (
      <div className="container mx-auto py-10 h-screen">
          <div className="w-2/4 mx-auto relative h-full">
            <div className='absolute bottom-0 w-full'>
              {messages && <MessageList messages={messages} currentUser={user} /> }
              <NewMessageForm onSend={onSendHandler} />
            </div>
          </div>
      </div>
    );
  }
  
  export default Chat;
  