
import { NewChatRoomForm } from '../components';


const JoinChat = ({onClickHandler, admin}) => {
  
    return (
        admin ? <div className="container mx-auto mt-[15%]">
        <div className="flex flex-row">
          <div className="w-2/4">
            <img src="/banner.jpg" alt="banner" className="w-4/5 mx-auto"/>
          </div>
          <div className="w-2/4">
            <h1 className="text-[44px] font-roboto" data-testid="mainText">Your friend {admin} invited you to a chat</h1>
            <p className="text-lg font-roboto text-gray-500">Connect, collaborate and celebrate from anywhere with Quick Chat</p>
            <NewChatRoomForm  onClickHandler={onClickHandler} isJoinChat/>
          </div>
        </div>
      </div> : <></>
    );
  }
  
  export default JoinChat;
  