import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import VideoPlayer from './VideoPlayer';

const video = () => {
  return (
    <div className="home-container-1">
    <LeftSideBar/>
    <div className="home-container-2">

    <h1>Gesture-Based Video Player</h1>
      <VideoPlayer />
        </div>
        </div>
  )
}

export default video
