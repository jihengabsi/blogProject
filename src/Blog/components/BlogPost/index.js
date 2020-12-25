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
        axios.get(`http://localhost:3001/api/announces/${this.state.slug}`)
          .then(res => {
            const announces = res.data;
            this.setState({ announces });
          })
      }
      render() {
  return(
        <div className="blogPostContainer">
            <Card style={{ marginLeft:'150px'}}>
            { this.state.announces.map(announce =>
                <div className="blogHeader">
                    <h1 className="postTitle">{announce.body.titre}</h1>
                    <span className="postedBy">posted on {new Date(announce.body.date_cr).toISOString().replace(/T/, ' ').replace(/\..+/, '') } </span>
                </div>
                  ) }

                <div className="postImageContainer">
                    {/* <img src={require('../../blogPostImages/' + post.blogImage)} alt="Post Image" /> */}
                    
                </div>

                <div className="postContent">
  {/* <h3>{post.blogTitle}</h3>
  <p>{post.blogText}</p> */}
                </div>
                
            </Card>
        </div>
   )

 }
}