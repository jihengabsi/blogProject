import React, { useState, useEffect }  from "react";
// @material-ui/core components
// core components

import './style.css';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Image from "./PVC-Expomoda-0005-Dark-Grey.jpg";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Link,NavLink,Switch,Route } from 'react-router-dom';
import Search from "@material-ui/icons/Search";
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import Modify from "./ModifyAnnounce.js";
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const customStyles = {
    content : {
      
      top                   : '50%',
      left                  : '60%',
      right                 : '0%',
      bottom                : 'auto',
      transform             : 'translate(-50%, -50%)'
    }
  };
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

 
  function closeModal(){
    setIsOpen(false);
  }
  const [startDate, setStartDate] = useState(new Date());
  return (   
 
     <view className="Card">
       <div className={classes.searchWrapper}>
       <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        <Button color="transparent" aria-label="edit" justIcon round>
          <Search />
        </Button>
      </div>
     <Card > 
  <CardBody>
  <Grid fluid>
    <Row>
  <Col  xs>
    <div className="postImageWrapper"> <img src={Image} alt="" /> </div>
    </Col>
    <Col xs>
<h4 >Description</h4>
   </Col>

    <Col xs> <Row xs><Button  onClick={openModal}  color="info" >Edit </Button></Row>
    <Row xs><Button color="info">Hide</Button></Row>
    </Col>
    </Row>
    </Grid>
  </CardBody>
</Card>
<Card > 
            <CardBody>
            <Grid fluid>
              <Row>
            <Col xs>
              <div className="postImageWrapper"> <img src={Image} alt="" /> </div>
              </Col>
              <Col xs>
 <h4 >Description</h4>
             </Col>
              <Col xs> <Row xs> <Link to={"/modify/"}><Button color="info">Edit </Button></Link></Row>
              <Row xs> <Button color="info">Hide</Button></Row></Col>
              </Row>
              </Grid>
            </CardBody>
        </Card>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <Modify style={{width: "300px"}}/>

        </Modal>
        </view>        
        
  );
}
