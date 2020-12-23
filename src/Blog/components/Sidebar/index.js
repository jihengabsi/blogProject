import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import logoCK from '../../assets/Images/logock.png';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);
    
    
    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);



  return(
      
      <div className="sidebarContainer" style={{
          width: props.width
      }}>
       
            <Card style={{ marginLeft:'100px',marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileImageContainer">
                    <img src={logoCK} alt="!!!" />
                </div>

                <div className="personalBio">
                CK MÉTROLOGIE est une Société Anonyme au capital de 400,000 Dinars.
                L’investissement globale s'élève à un million cent dinars, bouclé avec le concours de la BFPME et la BIAT.
                Elle a été crée en juillet 2006, et a commencé à fournir des prestations aux industriels tunisiens en septembre 2007.
                </div>
            </Card>
            <Card style={{marginLeft:'100px', marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>

                <div className="recentPosts">

                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/post/${post.slug}`}>
                                    <div className="recentPost">
                                    <img style={{width:"100px"}} src={require('../../blogPostImages/' + post.blogImage)} alt="Post Image" />
                                        <h3>{post.blogTitle}</h3>
                                        <span >{post.blogText.slice(0, 80)}...</span>    <br></br>                                    <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                            );
                        })
                    }
                </div>
            </Card>
      </div>
    
   )

 }

export default Sidebar