import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import Search from '../../assets/icons/search.png';
import { useHistory } from "react-router-dom";
/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    const [search, setSearch] = useState(false);

    const history = useHistory();
    const submitSearch = (e) => {
        e.preventDefault();
        let path = '/listPosts';
        history.push(path);

    }


    const openSearch = () => {
        setSearch(true);
    }


    const searchClass = search ? 'searchInput active' : 'searchInput';

  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/blog">Home</NavLink></li>
            <li><NavLink to="/blog/about-us">About Us</NavLink></li>
            <li><NavLink to="/blog/contact-us">Contact Us</NavLink></li>
            <li><NavLink to="/blog/login">Se connecter</NavLink></li>
            <li><NavLink to="/blog/signup">Créer un Compte</NavLink></li>
            <li><NavLink to="/blog/profile">Profile</NavLink></li>
        </ul>
        <div className="search">
            <form onSubmit={submitSearch}>
                <input type="text" className={searchClass} placeholder="Search" />
                <img onClick={openSearch} className="searchIcon" src={Search} alt="Search" />
            </form>
            
        </div>
    </div>
   )

 }

export default Navbar