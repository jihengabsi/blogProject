import React from "react";
// @material-ui/core components
// core components

import './style.css';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Image from "./PVC-Expomoda-0005-Dark-Grey.jpg";
import Button from "components/CustomButtons/Button.js";
export default function TableList() {
  return (     <view> <Card className="Card"> 
  <CardBody>
  <Grid fluid>
    <Row>
  <Col xs>
    <div className="postImageWrapper"> <img src={Image} alt="" /> </div>
    </Col>
    <Col xs>
<h4 >Description</h4>
   </Col>
    <Col xs> <Row xs> <Button color="info">Edit </Button></Row>
    <Row xs><Button color="info">Hide</Button></Row>
    </Col>
    </Row>
    </Grid>
  </CardBody>
</Card>
<Card className="Card"> 
            <CardBody>
            <Grid fluid>
              <Row>
            <Col xs>
              <div className="postImageWrapper"> <img src={Image} alt="" /> </div>
              </Col>
              <Col xs>
 <h4 >Description</h4>
             </Col>
              <Col xs> <Row xs> <Button color="info">Edit </Button></Row>
              <Row xs><Button color="info">Hide</Button></Row></Col>
              </Row>
              </Grid>
            </CardBody>
        </Card></view>        
        
  );
}
