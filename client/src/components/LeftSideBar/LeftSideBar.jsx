import React ,{useState} from 'react'
import { NavLink } from 'react-router-dom'

import "./LeftSideBar.css"
const LeftSideBar = ({isOpen,onClose}) => {
    
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const handleLinkClick = () => {
        
        setSidebarOpen(!sidebarOpen);
      };
  return (
    <div className={`left-sidebar ${isOpen ? 'open' : ''}`}>
    
        <nav className="side-nav">
            
       
                <NavLink to="/Main" className="side-nav-links" activeclassname="active" onClick={handleLinkClick}>
                <p>Dashboard</p>
                </NavLink>
            
            <div className="side-nav-div">
                <div>
                <NavLink to="/" className="side-nav-links" activeclassname="active" style={{paddingLeft:"40px"}}  onClick={handleLinkClick}>
                    <p>Filters</p>
                    </NavLink>
                </div>
                
             
            
                

            </div>
           
        </nav>
      
    </div>
  )
}

export default LeftSideBar
