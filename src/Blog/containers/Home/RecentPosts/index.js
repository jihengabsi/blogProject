import React, { useEffect, useState } from 'react';

import './style.css';
// import Card from '../../../components/UI/Card';
import logo from '../../../blogPostImages/PVC-Expomoda-0005-Dark-Grey.jpg';
import blogPost from '../../../data/blog.json';
import { NavLink } from 'react-router-dom';
import pic from '../../../assets/Images/ckpeople.jpg'
import axios from "axios";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardDeck
} from 'reactstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import CardBody from 'components/Card/CardBody';

/**
* @author
* @function RecentPosts
**/

export default class RecentPosts extends React.Component {
  state = {
    announces: [],
    data1: [],
    data2: [],
    test: [],
    rubriques: [],
    rubtitle: '',
  }
  componentDidMount() {
    axios.get(`http://localhost:3000/api/announces/`)
      .then(res => {
        const announces = res.data;
        this.setState({ announces });
        const data1 = announces.filter((announce) => announce.body.visib !== false);
        this.setState({ data1 });
        const last = data1.reverse()[0];
        console.log(last);

        axios.get(`http://localhost:3000/api/rubriques/${last.body.rubriqueId}`)
          .then(res => {
            const rubriques = res.data;
            this.setState({ rubriques });
            console.log(rubriques);
            // const rubtitle = rubriques.map((rubrique) => rubrique.body.titre);
            // this.setState({ rubtitle });
            // const rub =rubriques.splice(undefined,1)
            // console.log("rub = ",rub);
            // const name = rubriques.map(rubrique => rubrique.body.titre);
            // console.log(name);
            // this.setState({ name });
          })



      })
  }
  render() {
    return (
      <div >
        { this.state.data1.reverse().slice(-1).map((announce) =>
        
        

          // <Card className="Card2" >
          //   <Grid fluid>
          //     <hr style={{ height: "2px" }} width="20%" color="black" />
          //     <Row>
          //       <Col xs >
          //         <div className="postImageWrapper">
          //           <img className="imgu" src={announce.body.image} alt="Post Image" />
          //         </div>
          //       </Col >
          //       <Col xs style={{ marginRight: "15%" }}>
          //         <span></span>
          //         <h2>{announce.body.titre}</h2>
          //         <p>{announce.body.description}</p>
          //         <NavLink to={'/post/' + announce.id}>
          //           <Button color="danger">Lire la suite</Button>
          //         </NavLink>
          //       </Col>
          //     </Row>
          //   </Grid>
          // </Card>
          <CardDeck>
          <Card style={{ overflow: "auto", "width": "65%", marginRight:"auto",marginLeft:'6%', marginBottom:'20px'  }}>
            <CardImg top width="50%" top height="500px" style={{objectFit:"cover"}} src={announce.body.image} alt="Card image cap" />
            <CardBody>
              <CardTitle style={{marginTop:"0"}} tag="h3">{announce.body.titre}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">{this.state.rubriques.map((rubrique) => rubrique.body.titre)}</CardSubtitle>
              <CardText>{announce.body.description.slice(0, 120)}...</CardText>
              
              </CardBody>
              <NavLink to={'/post/' + announce.id}>
                <div className='card__actions'>
                  <Button color="danger" >Lire la suite</Button></div>
              </NavLink>

              {/* Sidebar */}
            </Card>
            <Card style={{ overflow: "auto", maxWidth: "25%", maxHeight:"800px",marginRight: '5%', marginBottom: '20px' }}>
              <CardImg width="50px" src={pic} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">CK MÉTROLOGIE est une Société Anonyme au capital de 400,000 Dinars.</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>L’investissement globale s'élève à un million cent dinars, bouclé avec le concours de la BFPME et la BIAT. Elle a été crée en juillet 2006, et a commencé à fournir des prestations aux industriels tunisiens en septembre 2007.</CardText>
                {/* <Button>Button</Button> */}
              </CardBody>
            </Card>
          </CardDeck>


        )}
      </div>
    )
  }
}