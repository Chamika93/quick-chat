import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import firebase from "firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { NewMessageForm, MessageList } from '../components';
import JoinChat from './JoinChat';


const Chat =  () => {

    let { id } = useParams();
    const [ user, setUser ] = useState('');
    const [ admin, setAdmin ] = useState('');

    const db = firebase.firestore();

    firebase.auth().onAuthStateChanged(async(user) => {
      if (user) {
        setUser(user.uid);
      }
    });


    // get the chat Admin
    db.collection("chats").doc(id).get().then(async (doc) => {
      if (doc.exists) {
          let admin  = await db.collection("user").doc(doc.data()?.admin).get();
          setAdmin(admin.data()?.name);
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });


    // get all the msgs
    const messagesRef = db.collection("chats").doc(id).collection("messages");
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });

    // send a msg
    const messageRef = db.collection("chats").doc(id).collection("messages").doc();
    const onSendHandler = async (message) => {
      await messageRef.set({
        text: message,
        user: user,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
    }

    const onClickHandler = async ( userName ) => {
      let { user }  = await firebase.auth().signInAnonymously().catch(alert);
      await db.collection("user").doc(user?.uid).set({
        name: userName
      })
    }

    return user ? (
      <div className="container mx-auto py-10 h-screen">
          <div className="w-2/4 mx-auto relative h-full">
            <div className='absolute bottom-0 w-full'>
              {messages && <MessageList messages={messages} currentUser={user} /> }
              <NewMessageForm onSend={onSendHandler} />
            </div>
          </div>
      </div>
    ) : <JoinChat onClickHandler={onClickHandler} admin={admin}/>;
  }
  
  export default Chat;
  