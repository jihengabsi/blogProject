import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import axios from "axios";
/**
* @author
* @function BlogPost
**/

export default class BlogPost extends React.Component  {
  
    constructor(props) {
     
        super(props);
        this.state = {
            announces: [],
            slug: props.match.params.slug
        };
      }
  

      componentDidMount() {
        axios.get(`http://localhost:3000/api/announces/${this.state.slug}`)
          .then(res => {
            const announces = res.data;
            this.setState({ announces });
          })
      }
      render() {
  return(
        <div className="blogPostContainer">
             { this.state.announces.map(announce =>
            <Card >
         
                <div className="blogHeader">
                    <h1 className="postTitle">{announce.body.titre}</h1>
                    <span className="postedBy">posted on {new Date(announce.body.date_cr).toISOString().replace(/T/, ' ').replace(/\..+/, '') } </span>
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