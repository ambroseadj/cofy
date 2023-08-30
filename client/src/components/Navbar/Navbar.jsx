import React from 'react'
import {Link, useNavigate} from'react-router-dom'
 import logo from "../../assests/logo.png"
 import search from "../../assests/search-solid.svg"
import {useSelector, useDispatch} from  "react-redux"
 import Avatar from "../../components//Avatar/Avatar.jsx"
 import './Navbar.css'
import { useEffect ,useState} from 'react'
import { setCurrentUser } from '../../actions/currentUser'
import decode from 'jwt-decode'
import bars from "../../assests/bars-solid.svg";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar"
 const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSlideIn = () => {
    setSidebarOpen(!sidebarOpen);
  };


 
  const navigate = useNavigate();

  const dispatch= useDispatch()
    var User= useSelector((state) => (state.currentUserReducer));

    useEffect(() => {

      const token = User?.token;
      if (token) {
        const decodedToken = decode(token);
        if (decodedToken.exp * 1000 < new Date().getTime()) {
          handleLogout();
        }
      }
  

      dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))))
    },[dispatch]);

    const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
      navigate("/");
      dispatch(setCurrentUser(null));
    };


   return (
    <nav className='main-nav'>
     <div className='navbar'>
      
     <button className="slide-in-icon" onClick={handleSlideIn}>
          <img src={bars} alt="bars" width="15" />
        </button>
   
       <Link to ='/' className='nav-item'>
        <img src={logo} alt="logo" className='lo'/>
       </Link>
       <Link to ="/" className='nav-item nav-btn'>About</Link>
       <Link to ="/" className='nav-item nav-btn'>Products</Link>
       <Link to ="/" className='nav-item nav-btn'>For Teams</Link>
      <form>
        <input type="text" placeholder="Search...." />
        <img src={search} alt="search" className='search-icon' width="18"/>
      </form>
        {User === null ?
            <Link to="/Auth" className='nav-item nav-links'>Log in</Link>:
        <>
        <Avatar backgroundColor='#009dff' py='8px' px='15px' borderRadius='50%' color='white'  > <Link
                  to={`/Users/${User?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Link></Avatar>

        <button className=' nav-links' onClick={handleLogout}>Log out</button>
        </>
        
        }
     </div>
     {window.innerWidth <= 768 && <LeftSideBar isOpen={sidebarOpen} />}
     </nav>
   )
 }
 
 export default Navbar
 