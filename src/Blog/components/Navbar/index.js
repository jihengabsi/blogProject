import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

import Search from '../../assets/icons/search.png';
import { useHistory } from "react-router-dom";
import Logo from '../../assets/Images/logock.png';
import MenuIcon from '@material-ui/icons/Menu';

import Script from 'react-load-script'
/**
* @author
* @function Navbar
**/

export default class Navbar extends Component {
  state = {
      keyWord:"",
      Lang:""
   
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

    <ul>
      <li>
        <nav role="navigation" class="primary-navigation">
          <ul>
            <li><NavLink to="/blog"><img style={{ height: "50px", marginLeft: "20px" }} src={Logo} alt="logo" /> </NavLink></li>
            <li><a href="/blog">Accueil</a></li>

            <li><a href="#">Nos prestations </a>
              <ul class="dropdown">
                <li><a href="#">Etalonnage et vérification</a></li>
                <li><a href="#">Formation</a></li>
                <li><a href="#">Conseil</a></li>

              </ul>
            </li>
            <li><a href="#">Nos accréditations</a>
              <ul class="dropdown">
                <li><a href="#">Electricité & Magnétisme</a></li>
                <li><a href="#">Temps & Fréquence</a></li>
                <li><a href="#">Température</a></li>
                <li><a href="#">Pesage</a></li>
                <li><a href="#">Pression</a></li>
                <li><a href="#">Dimensionnel</a></li>
                <li><a href="#">Masse</a></li>
                <li><a href="#">Conseil National d’Accréditation TUNAC</a></li>
              </ul>
            </li>
            <li><a href="#">Nos partenaires</a></li>

            <li><a href="#">Nous contacter</a></li>
            <li><a href="#">Nous rejoindre</a>
              <ul class="dropdown">
                <li><a href="#">Offres d’emploi</a></li>
                <li><a href="#">Stages de Projet de fin d’étude</a></li>
                <li><a href="#">Stages d’été</a></li>
              </ul>

            </li>
            <li>
              <select className="form-control" value={this.state.Lang}
                onChange={(event) => this.handleChange(event, "Lang")} style={{ width: '100%' }} id="lang" name="lang">
                <option value="FR">FR</option>
                <option value="ENG">ENG</option>
                <option value="AR">AR</option>
              </select>

            </li>
          </ul>

        </nav>
      </li>
      <li>
        <div className="search">
          <ul className="navbarMenu">

            <li>
              <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                  <div >
                    <form className="searchbar" onSubmit={this.handleSubmit}>
                      <input className="search_input" type="text" onChange={(event) => this.handleChange(event, "keyWord")} placeholder="Rechercher..." />
                      <button type="submit" className="search_icon"><img src={Search} /></button>
                    </form>

                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  
 );
}
}