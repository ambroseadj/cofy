import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Mainda from './Pages/Mainda/Mainda'



const AllRoutes = ({ slideIn, handleSlideIn }) => {
  return (
    <Routes>
    <Route  path='/' element={<Home />}/>
    <Route  path='/Auth' element={<Auth/>}/>
    <Route path='/main' element={<Mainda/>}/>
    </Routes>
  )
}

export default AllRoutes
