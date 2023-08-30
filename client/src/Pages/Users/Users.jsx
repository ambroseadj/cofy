import React from "react";
import {useLocation} from 'react-router-dom'
import "./Users.css";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import UsersList from "./UsersList";

const Users = ({ slideIn, handleSlideIn }) => {

  const location= useLocation()




  return (
    <div className="home-container-1">
     <LeftSideBar/>
      <div className="home-container-2">
        {
            location.pathname === '/Users' ?
            <UsersList/>:
            <></>

        }
      </div>
    </div>
  );
};

export default Users;