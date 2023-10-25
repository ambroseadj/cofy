import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import Barchart from '../../components/Barchart/Barchart'
import MapChart from '../../components/MapChart/MapChart'
import TimelineChart from '../../components/TimelineChart/TimelineChart'


const Mainda = () => {
  return (
    <div className='home-container-1'>
    <LeftSideBar/>
      <div className='home-container-2'>
      <React.StrictMode>
        <Barchart/>
        <MapChart/>
        <TimelineChart/>
        </React.StrictMode>
        


    </div>
    </div>
  )
}

export default Mainda
