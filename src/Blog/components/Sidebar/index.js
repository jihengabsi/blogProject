import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import logoCK from '../../assets/Images/logock.png';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';
import axios from "axios";
/**
* @author
* @function Sidebar
**/

export default class Sidebar extends React.Component  {
  
    constructor(props) {
     
        super(props);
        this.state = {
            announces: [],
        
        };
      }
  

      componentDidMount() {
        axios.get(`http://localhost:3000/api/announces/`)
          .then(res => {
            const announces = res.data;
            this.setState({ announces });
          })
      }
      render() {
  return(
    <div className="sidebarContainer" >
       
        <Card>  <div className="cardHeader">
        <span>À propos de nous</span>
    </div>
    <div className="profileImageContainer">
        <img src={logoCK} alt="!!!" />
    </div>

    <div className="personalBio">
    CK MÉTROLOGIE est une Société Anonyme au capital de 400,000 Dinars.
    L’investissement globale s'élève à un million cent dinars, bouclé avec le concours de la BFPME et la BIAT.
    Elle a été crée en juillet 2006, et a commencé à fournir des prestations aux industriels tunisiens en septembre 2007.
    </div>

   

    <div className="cardHeader">
        <span>Announces récents</span>
    </div>

    <div className="recentPosts">

    { this.state.announces.reverse().slice(-4).map((announce) =>
         
                   
                        <div className="recentPost">
                            
                        <img style={{paddingLeft:"30%",width:"70%"}} src={announce.body.image} alt="Post Image" />
                            <h3 >{announce.body.titre}</h3>
                            <span >{announce.body.description.slice(0, 80)}...</span>    <br></br> 
                           
                        </div>
                  
 ) }
    </div>

    </Card> 
      </div>
    )

}
}