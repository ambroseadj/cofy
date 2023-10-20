import React ,{useState} from 'react'
import { NavLink } from 'react-router-dom'

import "./LeftSideBar.css"
const LeftSideBar = ({isOpen,onClose}) => {
    
    const [SidebarOpen, setSidebarOpen] = useState(false);

    const handleLinkClick = () => {
        
        setSidebarOpen(false);
      };
  return (
    <div className={`left-sidebar ${isOpen ? 'open' : ''}`}>
    
        <nav className="side-nav">
            
       
                <NavLink to="/" className="side-nav-links" activeclassname="active" onClick={handleLinkClick}>
                <p>Home</p>
                </NavLink>
            
            <div className="side-nav-div">
                <div>
                    
                </div>
                
                  
            
                

            </div>
        </nav>
      
    </div>
  )
}

export default LeftSideBar
