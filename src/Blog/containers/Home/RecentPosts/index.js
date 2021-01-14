import React,{useEffect,useState} from 'react';

import './style.css';
import Card from '../../../components/UI/Card';
import logo from '../../../blogPostImages/PVC-Expomoda-0005-Dark-Grey.jpg';
import blogPost from '../../../data/blog.json';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import {
  Button
} from 'reactstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CardBody from 'components/Card/CardBody';

/**
* @author
* @function RecentPosts
**/

export default class RecentPosts extends React.Component  {
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
  render() {
  return(
    <div >
          { this.state.announces.reverse().slice(-1).map((announce) =>
          
        <Card className="Card" >
        <Grid fluid>
        <hr style={{height: "2px"}} width="20%" color="black"/>
       
        <Row>

          <Col xs >
          <div className="postImageWrapper">
        
                <img className="imgu" src={announce.body.image} alt="Post Image"/>
                </div>
                </Col >
                <Col xs style={{marginRight: "15%"}}> 
                <span></span>
                <h2>{announce.body.titre}</h2>
              
                <p>{announce.body.description}</p>
                <NavLink to={'/post/'+announce.id}> 
                                  <Button color="danger">Lire la suite</Button>
                                  </NavLink>
  
                </Col>
  


          
        </Row>
 
      </Grid>
                

        </Card>
          )}
    </div>
    
    )
  }
}