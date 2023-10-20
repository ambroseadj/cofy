import React , {useState} from 'react'
import "../../App.css"
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar"

import HomeMainbar from "../../components/HomeMainbar/HomeMainbar"
const Home = () => {



  return (
    <div className='home-container-1'>
    <LeftSideBar/>
      <div className='home-container-2'>
        <HomeMainbar/>
      
      </div>
    </div>
  )
}

export default Home
