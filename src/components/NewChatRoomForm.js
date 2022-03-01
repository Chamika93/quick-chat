import React from 'react'

const NewChatRoomForm = () => {
  return (
    <div className='mt-6 flex flex-row'>
        <input data-testid="name" type="text" name="name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/2 h-[50px] rounded-md sm:text-sm focus:ring-1" placeholder="Your Name" />
        <button data-testid="createChatButton" className="mx-5 px-5 rounded-md bg-blue-600 hover:bg-blue-700 text-white"> Create Chat</button>
    </div>
  )
}

export default NewChatRoomForm;
