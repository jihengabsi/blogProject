import React, { useState, useEffect } from 'react';
import './style.css';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import { Grid, Row, Col } from 'react-flexbox-grid';

  import ReactPaginate from 'react-paginate';
  import axios from "axios";
  import { makeStyles } from '@material-ui/core/styles';
/**
* @author
* @function AllPosts
**/

export default class AllPosts extends React.Component  {
  constructor(props) {
    super(props);
  this.state = {
    data: [],
    offset: 0,
    perPage: 3,
    currentPage: 1,
    visib:0,
  }
  this.handlePageClick = this
          .handlePageClick
          .bind(this);
}
handlePageClick = (e) => {
  const selectedPage = e.selected;
  const offset = selectedPage * this.state.perPage;
 
  this.setState({
      currentPage: selectedPage,
      offset: offset
  }, () => {
      this.receivedData()
  });

};
receivedData() {
  axios.get(`http://localhost:3000/api/announces/`)
  .then(res => {
    
    const data = res.data;
    const data1 = data.filter((announce) => announce.body.visib !== false);
          const slice = data1.slice(this.state.offset, this.state.offset + this.state.perPage)
       
          const postData = slice.map(announce => 
       
        <Col xs >
          
                                <div style={{"width":"300px","height":"400px"}}>
                                   
                                <Card style={{  overflow: "auto","width":"100%","height":"90%",borderColor:"transparent"}}>
                                <CardImg  title={announce.body.titre} top width="50%" height="180px"  src={announce.body.image} alt="Post Image" />
                                <CardBody>
                                  <CardTitle tag="h5"> {announce.body.titre}</CardTitle>
                                  {/* <CardSubtitle tag="h6" className="mb-2 text-muted">{post.postedOn}</CardSubtitle> */}
                                  <CardText >{announce.body.description.slice(0, 60)}...</CardText>
                
                                  <NavLink to={'/post/'+announce.id}> 
                                  <Button  color="danger" >Lire la suite</Button>
                                  </NavLink>
                                </CardBody>
                              </Card>
                              </div> 
                              </Col>  
      
  
        )
     
   
          this.setState({
           
              pageCount: Math.ceil(data1.length / this.state.perPage)-1,
             
              postData
          })
      });
}
handlePageClick = (e) => {
  const selectedPage = e.selected;
  const offset = selectedPage * this.state.perPage;

  this.setState({
      currentPage: selectedPage,
      offset: offset
  }, () => {
      this.receivedData()
  });

};

componentDidMount() {
  this.receivedData()
}
  

    render() {
      const { classes } = this.props;
  return(
         <div  style={{paddingLeft:"5%"}}>
      
             <Grid fluid>
        <Row>
                    {this.state.postData}
                    </Row>
                    </Grid>
                    <ReactPaginate
                    
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>

    )
  }
}
