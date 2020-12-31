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
          <div className="postImageWrapper2">
        
                <img src={logo} alt="Post Image"/>
                </div>
                </Col >
                <Col xs> 
                <span></span>
                <h2>Title</h2>
              
                <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firm... Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six rapt...</p>

  
                </Col>
  


          
        </Row>
 
      </Grid>
                

        </Card>
          )}
    </div>
    
    )
  }
}