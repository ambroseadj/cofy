import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from "./Pages/Questions/Questions"
import AskQuestion from "./Pages/AskQuestion/AskQuestion"
import DisplayQuestion from "./Pages/Questions/DisplayQuestion"
import Tags from "./Pages/Tags/Tags";
import Users from "./Pages/Users/Users";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Videoo from "./Pages/Videoo/Videoo";
import Room from './Pages/CallInterface/Room'


import CallInterface from './Pages/CallInterface/CallInterface' 
const AllRoutes = ({ slideIn, handleSlideIn }) => {
  return (
    <Routes>
    <Route  path='/' element={<Home />}/>
    <Route  path='/Auth' element={<Auth/>}/>
    <Route path="/Questions" element={<Questions/>}/>
    <Route path="/AskQuestion" element={<AskQuestion/>}/>
    <Route path="/Questions/:id" element={<DisplayQuestion/>}/>
    <Route path="/Tags" element={<Tags/>}/>
    <Route path="/Users" element={<Users/>}/>
    <Route path="/Users/:id" element={< UserProfile />}/>
    <Route path="/Videoo" element={<Videoo/>}/>
    <Route path="/CallInterface" element={<CallInterface/>}/>
    <Route path="/room/:roomId" element={<Room/>}/>
    </Routes>
  )
}

export default AllRoutes
