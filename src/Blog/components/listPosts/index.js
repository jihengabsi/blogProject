import React from 'react';
import './style.css';

import { NavLink } from 'react-router-dom';
import {
    Card,  CardBody,
   Button
  } from 'reactstrap';
  import { Grid, Row, Col } from 'react-flexbox-grid';
  import axios from "axios";
  
/**
* @author
* @function ListPosts
**/
export default class ListPosts extends React.Component  {

  componentDidMount() {
    
    axios.get(`http://localhost:3000/api/announces/search/find/?keywords=${this.state.keyWord}`)
      .then(res => {
        const announces = res.data;
        this.setState({ announces });
      })
  }
  constructor(props) {
    super(props);
    this.state = {
        announces: [],
        keyWord: localStorage.getItem('keyWord')
    };
      
  }

 render(){
 
  return(
      <div className='searchcontainer'>
      <React.Fragment >
         <div  margin-left= "20px">
         <Grid fluid>
     
      
         { this.state.announces.map(announce =>
                        
                        <Card > 
                        <CardBody>
                        <Grid fluid>
                          <Row>
                        <Col xs>
                       
                          <h2>{announce.body.titre}</h2>
                          
                          <div className="postImageWrapper"> <img className="imgu" src={announce.body.image} alt="" /> </div>
                          </Col>
                          <Col xs>
                          <h4 >{announce.body.description}</h4>
                          <span >posted on {new Date(announce.body.date_cr).toString().replace(/T/, ' ').replace(/\..+/, '') } </span>
                         </Col>
                          <Col xs={6} md={2}>
                          <NavLink to={'/post/'+announce.id}> 
                                  <Button  color="danger" >Lire la suite</Button>
                                  </NavLink>
                          </Col>
                          </Row>
                          </Grid>
                        </CardBody>
                    </Card>
                          ) }
                    </Grid>

    </div>
      </React.Fragment>
    
      </div>)
 }
 }

