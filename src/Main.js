import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Messages from './Messages';
import MessageInput from './MessageInput';
import Sidenav from './Sidenav';
import Navbar from './Navbar';
import Conversations from './Conversations';
import Profile from './Profile';
import './App.css';
import { useLocation, useHistory } from "react-router-dom";
import axios from 'axios';

function Main() {
    const location = useLocation();
    const [socket, setSocket] = useState(null);

  useEffect(() => {
    axios.get('https://hexagonal-amplified-move.glitch.me/webhook')      
    .then(res => {
        console.log("res",res)
      })
      .catch((err)=>{console.log(err)})



      console.log(location.state)
    const newSocket = io(`https://lets-dive-be.herokuapp.com/`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);



    return (
        <div className="App">
        {/* <Navbar /> */}
        <Sidenav />
        <Conversations />
        <div style={{  backgroundColor: "#F7F8F9"}}>
          { socket ? (
            <div className="chat-container">
              <Messages socket={socket} />
              <MessageInput socket={socket} />
            </div>
          ) : (
            <div>Not Connected</div>
          )}
        </div>
        
      <Profile data={location.state}/>
        
              
      </div>
    )
}

export default Main
