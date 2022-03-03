
import firebase from "firebase";
import { useNavigate } from "react-router-dom";

import { NewChatRoomForm } from '../components';


const Home = () => {

  const db = firebase.firestore();

    let navigate = useNavigate();

    const onClickHandler = async ( userName ) => {
      let { user }  = await firebase.auth().signInAnonymously().catch(alert);

      await db.collection("user").doc(user?.uid).set({
        name: userName
      })
 
      var newChatRef = db.collection("chats").doc();

      newChatRef.set({
        admin: user?.uid,
      })
      navigate(`/chat/${newChatRef.id}`)
    }
  
    return (
      <div className="container mx-auto mt-[15%]">
        <div className="flex flex-row">
          <div className="w-2/4">
            <img src="/banner.jpg" alt="banner" className="w-4/5 mx-auto"/>
          </div>
          <div className="w-2/4">
            <h1 className="text-[44px] font-roboto" data-testid="mainText">Create a chat quickly without a hassle.</h1>
            <p className="text-lg font-roboto text-gray-500">Connect, collaborate and celebrate from anywhere with Quick Chat</p>
            <NewChatRoomForm  onClickHandler={onClickHandler} />
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  