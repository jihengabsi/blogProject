import React, { Component } from 'react';
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

export default class Navbar extends Component {
  state = {
      keyWord:"",
   
  }
  handleChange (evt, field) {
    this.setState({ [field]: evt.target.value });

  }

  handleSubmit = event => {
    event.preventDefault();

   const keyWord=this.state.keyWord;
    localStorage.setItem('keyWord',keyWord);
         
    window.location = "/blog/listPosts";

    };



render(){
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
          <form className="searchbar" onSubmit={this.handleSubmit}>
            <input className="search_input" type="text" onChange={(event)=>this.handleChange(event, "keyWord")}  placeholder="Rechercher..." />
            <button type="submit" className="search_icon"><img src={Search}/></button>
            </form>
        
          </div>
        </div>
      </div>
        </li>
         
            </ul>
        </div>
    </div>
 );
}
}