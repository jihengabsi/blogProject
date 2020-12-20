import React, { useState, useEffect } from 'react';
import './style.css';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import { Grid, Row, Col } from 'react-flexbox-grid';

/**
* @author
* @function ListPosts
**/

const ListPosts = (props) => {
    
    const [posts, setPosts] = useState([]);
    
    
    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);



  return(
      <div className='searchcontainer'>
      <React.Fragment >
         <div  margin-left= "20px">
         <Grid fluid>
      
      
      {
                        posts.map(post => {
                            return (
                                <Row>
                                <Col >
                                <div className='searchcontainer'>
                                 
                                <Card>
                                <div style={{width:"100%"}}>
                                <Row>
                                <div style={{width:"30%"}}>
                                <CardImg height="100%"  src={require('../../blogPostImages/' + post.blogImage)}  alt="Post Image" />
                                </div>
                                <CardBody>
                                  <CardTitle tag="h5">{post.blogTitle}</CardTitle>
                                  <CardSubtitle tag="h6" className="mb-2 text-muted">{post.postedOn}</CardSubtitle>
                                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                  <NavLink key={post.id} to={`/post/${post.slug}`}>
                                  <Button>Read more</Button>
                                  </NavLink>
                                </CardBody>
                                </Row>
                                <br></br>
                                </div>
                              </Card>
                              
                              </div> 
                              </Col>  
                              </Row>
                            );
                        })
                    }
                  
                    </Grid>

    </div>
      </React.Fragment>
    
      </div>)

 }

export default ListPosts