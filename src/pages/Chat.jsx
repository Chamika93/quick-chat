import React, { useState } from 'react'
import { NewMessageForm, MessageList } from '../components';

const Chat = () => {

    const [ messages, setMessages ] = useState([]);

    const onSendHandler = (message) => {
      setMessages([...messages, message]);
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
  