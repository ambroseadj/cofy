import React ,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import Globe from "../../assests/Globe.svg"
import "./LeftSideBar.css"
const LeftSideBar = ({isOpen,onClose}) => {
    
    const [SidebarOpen, setSidebarOpen] = useState(false);

    const handleLinkClick = () => {
        // Call the onClose function to close the sidebar
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
                    <p>PUBLIC</p>
                </div>
                
                    <NavLink to ="/Questions" className="side-nav-links" activeclassname="active"  onClick={handleLinkClick}>
                        <img src={Globe} alt="Globe"/>
                        <p style={{ paddingLeft:"10px"}}> Questions</p>
                    </NavLink>
            
                

                    <NavLink to="/Tags" className="side-nav-links" activeclassname="active" style={{paddingLeft:"40px"}} onClick={handleLinkClick}>
                        <p>Tags</p>
                    </NavLink>
                
                

                    <NavLink to="/Users" className="side-nav-links" activeclassname="active" style={{paddingLeft:"40px"}} onClick={handleLinkClick}>
                    <p>Users</p>
                    </NavLink>

                    <NavLink to="/Videoo" className="side-nav-links" activeclassname="active" style={{paddingLeft:"40px"}} onClick={handleLinkClick}>
                    <p>custom video player</p>
                    </NavLink>


                    <NavLink to ="/CallInterface " className="side-nav-links" activeclassname="active"  style={{paddingLeft:"40px"}} onClick={handleLinkClick}>
                        
                        <p >VOIP </p>
                    </NavLink>
            
                

            </div>
        </nav>
      
    </div>
  )
}

export default LeftSideBar
