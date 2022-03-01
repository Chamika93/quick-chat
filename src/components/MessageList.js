import React from 'react'

const Message = ({message}) => {
  return (
    <div className='bg-blue-600 my-2 px-4 py-2 text-white rounded-t-full rounded-bl-full'><p>{message}</p></div>
  )
}


const MessageList = ({messages}) => {
  return (
    <div>
        {messages?.map(message => <Message message={message}/>)}
    </div>
  )
}

export default MessageList;
