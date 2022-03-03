import React from 'react'

const Message = ({ message, isUserMessage }) => {
  return isUserMessage ? <div className='bg-blue-600 my-2 px-4 py-2 text-white rounded-t-full rounded-bl-full'><p>{message}</p></div>
    : <div className='bg-red-300 my-2 px-4 py-2 text-white rounded-t-full rounded-br-full'><p>{message}</p></div>

}


const MessageList = ({ messages, currentUser}) => {
  return (
    <div data-testid='messages'>
        {messages?.map(({text, user}, index) => <Message key={index} message={text} isUserMessage={currentUser === user} />)}
    </div>
  )
}

export default MessageList;
