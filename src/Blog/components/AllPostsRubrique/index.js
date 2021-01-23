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
* @function AllPostsRubrique
**/

export default class AllPostsRubrique extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data2: [],
      slug: props.match.params.slug,
      offset: 0,
      perPage: 3,
      currentPage: 1,
      visib: 0,
      id: '',
      rubriques: [],
      name: '1',
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
        const id = this.state.slug;
        
        const data1 = data.filter((announce) => announce.body.rubriqueId == id && announce.body.visib == true);
        // const data1 = data.filter((announce) => announce.body.rubriqueId == 'lVHZDFplP9i9R5PI0BBH');

        const slice = data1.slice(this.state.offset, this.state.offset + this.state.perPage)
        console.log(this.state.slug);
        const postData = slice.map(announce =>

          <Col xs >

            <div style={{ "width": "300px", "height": "400px" ,}}>

              <Card className="rubcard" style={{ overflow: "auto", "width": "100%", "height": "100%",
               backgroundColor:"#ededed"}}>
                <CardImg title={announce.body.titre} top width="50%" height="180px" src={announce.body.image} alt="Post Image" />
                <CardBody>
                  <CardTitle tag="h5"> {announce.body.titre}</CardTitle>
                  {/* <CardSubtitle tag="h6" className="mb-2 text-muted">{post.postedOn}</CardSubtitle> */}
                  <CardText >{announce.body.description.slice(0, 60)}...</CardText>
                  
                </CardBody>
                <NavLink to={'/post/' + announce.id}>
                    <div className='card__actions'>
                    <Button color="danger" >Lire la suite</Button></div>
                  </NavLink>
              </Card>
            </div>
          </Col>


        )


        this.setState({

          pageCount: Math.ceil(data1.length / this.state.perPage) - 1,

          postData
        })
      });
  }
  titlerubrique() {
    axios.get(`http://localhost:3000/api/rubriques/${this.state.slug}`)
    .then(res => {
      const rubriques = res.data;
            this.setState({ rubriques });
            const name = rubriques.map(rubrique => rubrique.body.titre);
            console.log(name);
            this.setState({ name });

    })
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
    // const id = this.state.slug;
    // this.setState({ id })
    // axios.get(`http://localhost:3000/api/rubriques/${id}`)
    //   .then(res => {
    //     const rubriques = res.data;
    //     console.log("hello");
    //     this.setState({ rubriques });
    //     const name = rubriques.map(rubrique => rubrique.body.titre);
    //     console.log(rubriques);
    //     console.log("hi");
    //     this.setState({ name });
        
    //   })
    this.titlerubrique();
      this.receivedData();
    
  }


  render() {
    const { classes } = this.props;
    return (
      <div style={{ paddingLeft: "5%" }}>
        <h1 className="rubriqueTitle">{this.state.name}</h1>
        <div className="rubriquedescription">Les annonces centenus dans cette rubriques incluent :</div>
        <Grid fluid>

          <Row>
            {this.state.postData}
          </Row>
        </Grid>
        {/* {this.state.id}
        {this.state.name} */}
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
          activeClassName={"active"} />
      </div>

    )
  }
}
