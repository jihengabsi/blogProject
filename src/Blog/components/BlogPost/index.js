import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import axios from "axios";
import logoCK from '../../assets/Images/logock.png';
import { NavLink } from 'react-router-dom';
/**
* @author
* @function BlogPost
**/

export default class BlogPost extends React.Component  {
  
    constructor(props) {
     
        super(props);
        this.state = {
            announces: [],
            slug: props.match.params.slug,
            rubriques:[],
            id:"",
            name:""
        };
      }
  

      componentDidMount() {
        axios.get(`http://localhost:3000/api/announces/${this.state.slug}`)
          .then(res => {
            const announces = res.data;
            this.setState({ announces });
            const id=this.state.announces.map(announce =>announce.body.rubriqueId);       
          axios.get(`http://localhost:3000/api/rubriques/${id}`)
          .then(res => {
            const rubriques = res.data;
            this.setState({ rubriques });
            const name= rubriques.map(rubrique =>rubrique.body.titre);
            console.log(name);
            this.setState({name});
          })
        })
      }
      render() {
  return(
        <div className="blogPostContainer">
             { this.state.announces.map(announce =>
            <Card >
         
                <div className="blogHeader">
                  <br></br>
                    <h1 className="postTitle">{announce.body.titre} </h1>
                    <h1 className="postTitle">{this.state.name} </h1>
                    <span className="postedBy">{new Date(announce.body.date_cr).toISOString().replace(/T/, ' ').replace(/\..+/, '') } </span>
                </div>
                 
                <div className="postImageContainer">
                   <img src={announce.body.image} alt="Post Image" /> 
                    
                </div>
             


                <div className="postContent">

  <p>{announce.body.description}</p> 
                </div>
                
            </Card>
                ) }
                  
      
        </div>
   )

 }
}