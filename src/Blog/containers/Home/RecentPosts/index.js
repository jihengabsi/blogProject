import React,{useEffect,useState} from 'react';

import './style.css';
import Card from '../../../components/UI/Card';
import logo from '../../../blogPostImages/PVC-Expomoda-0005-Dark-Grey.jpg';
import blogPost from '../../../data/blog.json';
import { NavLink } from 'react-router-dom';
import {
  Button
} from 'reactstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';
/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  const [posts, setPosts] = useState([]);
    
    
  useEffect(() => {
      const posts = blogPost.data;
      setPosts(posts);
  }, [posts]);

  return(
    <div style={props.style}>

        <Card className="Card" >
        <Grid fluid>
        <Row>
          <Col xs >
          <div className="postImageWrapper">
                <img src={logo} alt="Post Image"/>
                </div>
                </Col >
                <Col xs> 
                
                <h2>Title</h2>
                <span>posted on July 21, 2016 by adminName</span>
                <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firm... Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six rapt...</p>

                <Button>Read More</Button> 
                </Col>
  


        
          
        </Row>
      </Grid>
                

        </Card>
    </div>
   )

 }

export default RecentPosts