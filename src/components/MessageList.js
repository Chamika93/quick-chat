import React, { useState } from 'react'
import firebase from "firebase";

const Message = ({ message, isUserMessage, user }) => {

  const [ userName, setUserName ] = useState('');

  const db = firebase.firestore();
  const userRef = db.collection("user").doc(user);

  userRef.get().then((doc) => {
    if (doc.exists) {
        setUserName(doc.data()?.name);
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });

  return isUserMessage ? 
    ( <div className='w-full h-[48px]'>
        <div className='bg-blue-600 my-2 px-4 py-2 text-white rounded-t-full rounded-bl-full w-fit absolute right-0'>
          <p>{message}</p>
        </div>
      </div> )
    : ( <div className='w-full h-[68px]'>
          <div className='bg-red-300 my-2 px-4 py-2 text-white rounded-t-full rounded-br-full w-fit absolute left-0'>
            <p className='text-sm text-sky-600'>{userName}</p>
            <p>{message}</p>
          </div>
      </div> )

}


const MessageList = ({ messages, currentUser}) => {
  return (
    <div data-testid='messages'>
        {messages?.map(({text, user}, index) => <Message key={index} message={text} isUserMessage={currentUser === user} user={user} />)}
    </div>
  )
}

export default MessageList;
