import React from 'react'
import "../../App.css";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";


const Questions = ( {slideIn}) => {
  return (
    <div className="home-container-1">
     <LeftSideBar/>
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  );
};


export default Questions
