import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import Search from '../../assets/icons/search.png';
import { useHistory } from "react-router-dom";
import Logo from '../../assets/Images/logock.png';
import MenuIcon from '@material-ui/icons/Menu';
/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    const [keyWord, setKeyWord] = useState("");

    const history = useHistory();
    const submitSearch = (e) => {
        e.preventDefault();
     
        history.push('/listPosts/'+keyWord);

    }




  return(
    <div className="navbar">
        <ul className="navbarMenu">

        <li class="dropdown">
        <a  class="Menu" > 
        <MenuIcon   href="javascript:void(0)" class="dropbtn" ></MenuIcon>
   
    </a>
    <div class="dropdown-content">
      <a href="/blog/login">Connecter</a>
      <a href="/blog/signup">Créer une compte</a>
      <a href="/blog/profile">Profile</a>
    </div>
  </li>
      
            <li><NavLink to="/blog"><img style={{height:"50px",marginLeft:"20px"}} src={Logo} alt="logo" /> </NavLink></li>
            <li>  <li><NavLink to="/blog">Home</NavLink></li></li>

        
        </ul>
        <div className="search">
        <ul className="navbarMenu">
      
       <li>  
       <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div >
          <form className="searchbar" onSubmit={submitSearch}>
            <input className="search_input" type="text"  onChange={setKeyWord}  placeholder="Rechercher..." />
            <a href={'/listPosts'} className="search_icon"><img src={Search}/></a>
            </form>
        
          </div>
        </div>
      </div>
        </li>
         
            </ul>
        </div>
    </div>
   )

 }

export default Navbar