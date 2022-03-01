import React, { useState } from 'react'

const NewMessageForm = ({onSend}) => {

   const [ messageText, setMessageText] = useState('');

   const onClickHandler = () => {
     if(messageText) {
      onSend(messageText);
      setMessageText('');
     }
   }

  return (
    <div className='flex'>
         <input data-testid="messageText" type="text" name="message" 
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full h-[50px] rounded-md sm:text-sm focus:ring-1"
            placeholder="Your message" onChange={(e) => setMessageText(e.target.value)} value={messageText} onKeyDown={(event) => event.code === 'Enter' ? onClickHandler() : null }/>
         <button data-testid="sendButton" onClick={onClickHandler}>  <img src="/send.png" alt="send" className='w-8 ml-2'/></button>
    </div>
  )
}

export default NewMessageForm;
