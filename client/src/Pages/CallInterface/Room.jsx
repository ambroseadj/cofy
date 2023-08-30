import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import {ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from 'react-router-dom';
import "./Room.css"

const Room = () => {


    const {roomId} = useParams();

    const myMeeting = async (element) =>{
        const appID= 1285435192;
        const serverSecret= "4af24dc7d7d3a11e05ba7f34f1bdf607";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),"ambrose")
        const zp= ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode:ZegoUIKitPrebuilt.VideoConference
            },
        }
        );
    };

  return (
    <div className="home-container-1">
    <LeftSideBar/>
    <div className="home-container-2">
        <h1>ROOM(for testing open two window and use same room id)</h1>
        <div className='room-page'>
            <div ref={myMeeting}/>

        </div>
        </div>
        </div>
  )
}

export default Room
