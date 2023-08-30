import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen,faImage } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Avatar from "../../components/Avatar/Avatar";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import "./UsersProfile.css";


const UserProfile = ({ slideIn, handleSlideIn }) => {
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);
  const [Switch, setSwitch] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="home-container-1">
      <LeftSideBar  />
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar
                backgroundColor="purple"
                color="white"
                fontSize="50px"
                px="40px"
                py="30px"
              >
                {selectedImage ? (
                  <img src={URL.createObjectURL(selectedImage)} alt="Avatar" className="profile-photo" />
                ) : (
                  currentProfile?.name.charAt(0).toUpperCase()
                )}
               
              </Avatar>
              <div className="user-name">
                <h1>{currentProfile?.name}</h1>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
                  {moment(currentProfile?.joinedOn).fromNow()}
                </p>
              </div>
            </div>
            
            {currentUser?.result._id === id && (
                <div className="edit-profile-btns">
              <button
                type="button"
                onClick={() => setSwitch(true)}
                className="edit-profile-btn"
              >
                <FontAwesomeIcon icon={faPen} /> Edit Profile
              </button>
              <label htmlFor="avatar-input" className="edit-avatar-btn">
          <FontAwesomeIcon icon={faImage} /> Edit Avatar
        </label>
              <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                  className="profile-picture-input"
                  id="avatar-input"
                />
                </div>
            )}
          </div>
          
          <>
            {Switch ? (
              <EditProfileForm
                currentUser={currentUser}
                setSwitch={setSwitch}
                setSelectedImage={setSelectedImage}
              />
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
          </>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;