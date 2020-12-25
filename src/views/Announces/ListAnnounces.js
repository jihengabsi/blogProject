import React, { Component,useState, useEffect }  from "react";
// @material-ui/core components
// core components

import './style.css';
import classNames from "classnames";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Popper from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";
import Card from "components/Card/Card.js";
import Card2 from '../../Blog/components/UI/Card/index.js'
import CardBody from "components/Card/CardBody.js";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Image from "./PVC-Expomoda-0005-Dark-Grey.jpg";
import Button from "components/CustomButtons/Button.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
import { Link,NavLink,Switch,Route } from 'react-router-dom';
import Search from "@material-ui/icons/Search";
import FilterListIcon from '@material-ui/icons/FilterList';
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import Modify from "./ModifyAnnounce.js";
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HideButton from "components/HideButton/index.js"
import { render } from "react-dom";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);


const customStyles = theme => ({
  content : {
    
    top                   : '50%',
    left                  : '60%',
    right                 : '0%',
    bottom                : 'auto',
    transform             : 'translate(-50%, -50%)'
  }
});
class TableList extends React.Component  {
  componentDidMount() {
    axios.get(`http://localhost:3001/api/announces/search/find`)
      .then(res => {
        const announces = res.data;
        this.setState({ announces });
      })
  }

  handleChange (event) {
    this.setState({ date_cr: event.target.value });

  }
 
  handleSubmit = event => {
    event.preventDefault();

    axios.get(`http://localhost:3001/api/announces/search/find/?date_cr=${Date.parse(this.state.date_cr)}`)
      .then(res => {
        const announces = res.data;
        this.setState({ announces });
        alert("success!!");
      }).catch(error=>{
        console.log(error.message);
        alert("fail!!");
      })
  }
  constructor() {
    super();
    this.state = {
      date_cr: '', 
    announces: [],
      openFilter:null,
      type:null,
     
    };   
  }




render(){
  const { classes } = this.props;

  return (   
    
     <view className="Card">
       <div className={classes.searchWrapper}>
   
         <form onSubmit={this.handleSubmit}>
        <input  onChange={(event)=>this.handleChange(event)} value={this.state.date_cr} type={"date"} placeholder="" />
        <Button type="submit" color="transparent" aria-label="edit" justIcon round>
          <Search />
        </Button>
        
        </form>
      </div>
      { this.state.announces.map(announce =>
<Card > 
            <CardBody>
            <Grid fluid>
              <Row>
            <Col xs>
              <h2>{announce.body.titre}</h2>
              <div className="postImageWrapper"> <img className="imgu" src={Image} alt="" /> </div>
              </Col>
              <Col xs>
              <h4 >{announce.body.description}</h4>
              <span >posted on {new Date(announce.body.date_cr).toISOString().replace(/T/, ' ').replace(/\..+/, '') } </span>
             </Col>
              <Col xs={6} md={2}>
              <Row xs><Button  style={{width:"100px"}}/*onClick={openModal2} */color="success" >Details</Button></Row>
          <Row xs><Button  style={{width:"100px"}}/* onClick={openModal} */ color="info" >Edit</Button></Row>
          <Row xs><div style={{width:"100px"}}><HideButton /></div></Row>
              </Col>
              </Row>
              </Grid>
            </CardBody>
        </Card>
          ) }
        {/* <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
          <Modify style={{width: "400px"}}/>
        </Modal>
        <Modal style={{height: "500px"}}
            isOpen={modal2IsOpen}
            onRequestClose={closeModal2}
            style={customStyles}
            contentLabel="Example Modal2"
          >
          <Card2 style={{height: "400px"}}>
                <div className="blogHeader">
                    <h1 className="postTitle">blogTitle1</h1>
                <span className="postedBy">posted on "July 21, 2016" by CK Métrologie</span>
                </div>

                <div  className="postImageContainer">
                    <img src={require('../../Blog/blogPostImages/tele.jpeg')} alt="Post Image" />
                    
                </div>

                <div className="postContent">
                <h3>blogTitle1</h3>
                <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.</p>
                </div>
                
          </Card2>
        </Modal> */}
        </view>        
        
        );
      }
    }
    
    export default withStyles(styles, { withTheme: true })(TableList);