import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DailyIframe from '@daily-co/daily-js';
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash, FaPhone, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import { useNavigate } from 'react-router-dom';



const CallInterface = () => {
  const [roomCode, setRoomCode] = useState("")
  const Navigate= useNavigate();

 const handleFormSubmit=(ev) =>{
    ev.preventDefault();
    Navigate(`/room/${roomCode}`);


  };
  return (
    <div className="home-container-1">
    <LeftSideBar/>
    <div className="home-container-2">
   <div className='home-page'>
    <form onSubmit={handleFormSubmit} className='form'>
      <div>
      <h1>Voip</h1>
        <label > Enter Room Code</label>
       <input 
       value={roomCode}
       onChange={(e) => setRoomCode(e.target.value)}
       type="text" 
       required 
       placeholder = "Enter Room Code"/>
      </div>
      <button type="submit">Enter Room</button>
    </form>
   </div>
   </div>
   </div>
  );
};

export default CallInterface;
