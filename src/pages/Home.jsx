import { NewChatRoomForm } from '../components';

const Home = () => {
    return (
      <div className="container mx-auto mt-[15%]">
        <div className="flex flex-row">
          <div className="w-2/4">
            <img src="/banner.jpg" alt="banner" className="w-4/5 mx-auto"/>
          </div>
          <div className="w-2/4">
            <h1 className="text-[44px] font-roboto" data-testid="mainText">Create a disposable chat quickly without a hassle.</h1>
            <p className="text-lg font-roboto text-gray-500">Connect, collaborate and celebrate from anywhere with Quick Chat</p>
            <NewChatRoomForm />
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  