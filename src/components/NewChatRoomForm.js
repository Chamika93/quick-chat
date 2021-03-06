import React, { useState } from 'react'

const NewChatRoomForm = ({onClickHandler, isJoinChat}) => {

  const [ userName, setUserName] = useState('');

  const buttonOnClick = () => {
    if(!userName) {
      alert('Please insert your name');
    } else {
      onClickHandler(userName);
    }
   
  }

  return (
    <div className='mt-6 flex flex-row'>
        <input required value={userName} onChange={(e) => setUserName(e.target.value)} data-testid="name" type="text" name="name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/2 h-[50px] rounded-md sm:text-sm focus:ring-1" placeholder="Your Name" />
        <button onClick={buttonOnClick} data-testid="createChatButton" className="mx-5 px-5 rounded-md bg-blue-600 hover:bg-blue-700 text-white"> {isJoinChat ? 'Join Chat': 'Create Chat' } </button>
    </div>
  )
}

export default NewChatRoomForm;
