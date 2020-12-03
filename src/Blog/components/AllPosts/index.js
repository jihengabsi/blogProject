import React, { useState, useEffect } from 'react';
import './style.css';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import { Grid, Row, Col } from 'react-flexbox-grid';
  import Logo from '../../blogPostImages/PVC-Expomoda-0005-Dark-Grey.jpg';
/**
* @author
* @function AllPosts
**/

const AllPosts = (props) => {
    
    const [posts, setPosts] = useState([]);
    
    
    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);



  return(
      <React.Fragment >
         <div  margin-bottom= "20px">
         <Grid fluid>
        <Row>
      
      {
                        posts.map(post => {
                            return (
                                <Col xs >
                                <div>
                                    
                                <Card>
                                <CardImg top width="50%"   src={Logo}  alt="Post Image" />
                                <CardBody>
                                  <CardTitle tag="h5">{post.blogTitle}</CardTitle>
                                  <CardSubtitle tag="h6" className="mb-2 text-muted">{post.postedOn}</CardSubtitle>
                                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                  <NavLink key={post.id} to={`/post/${post.slug}`}>
                                  <Button>Read more</Button>
                                  </NavLink>
                                </CardBody>
                              </Card>
                              </div> 
                              </Col>  
                            );
                        })
                    }
                    </Row>
                    </Grid>

    </div>
      </React.Fragment>
    
   )

 }

export default AllPosts