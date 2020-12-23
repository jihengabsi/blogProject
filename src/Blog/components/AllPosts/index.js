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
  import axios from "axios";
/**
* @author
* @function AllPosts
**/

export default class AllPosts extends React.Component  {
  state = {
    announces: [],
  }
  componentDidMount() {
    axios.get(`http://localhost:3000/api/announces/`)
      .then(res => {
        const announces = res.data;
        this.setState({ announces });
      })
  }
    // const [posts, setPosts] = useState([]);
    
    
    // useEffect(() => {
    //     const posts = blogPost.data;
    //     setPosts(posts);
    // }, [posts]);


    render() {
  return(
         <div  margin-bottom= "20px">
         <Grid fluid>
        <Row>
        { this.state.announces.map(announce =>
      
                                <Col xs >
                                <div>
                                   
                                <Card>
                                {/* <CardImg top width="50%" height="180px"  src={require('../../blogPostImages/' + post.blogImage)} alt="Post Image" /> */}
                                <CardBody>
                                  <CardTitle tag="h5"> {announce.body.titre}</CardTitle>
                                  {/* <CardSubtitle tag="h6" className="mb-2 text-muted">{post.postedOn}</CardSubtitle> */}
                                  <CardText>{announce.body.description}</CardText>
                                  <NavLink to={'/post/'+announce.id}> 
                                  <Button>Read more</Button>
                                  </NavLink>
                                </CardBody>
                              </Card>
                              </div> 
                              </Col>  
                          ) }
                    </Row>
             
                    </Grid>

    </div>
    
    )
  }
}