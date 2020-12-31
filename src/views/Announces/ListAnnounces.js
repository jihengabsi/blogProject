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



class TableList extends React.Component  {
  componentDidMount() {
    axios.get(`http://localhost:3000/api/announces/search/find`)
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

    axios.get(`http://localhost:3000/api/announces/search/find/?date_cr=${Date.parse(this.state.date_cr)}`)
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
      modalIsOpen:false,
      modalIsOpen1:false,
      title:"",
      desc:"",
      date:"",
      id:"",
      image:"",
     
  
    }; 
      
  }
    handleCloseFilter() {
   
        this.setState({ openFilter:null});
     
      };
     textFilter ()  {
        this.setState({ openFilter:null});
        this.setState({ type:"text"});
    
      };
      
     dateFilter () {
        this.setState({ openFilter:null});
        this.setState({ type:"date"});
    
      };
     handleClickFilter (event){
        if (this.state.openFilter && this.state.openFilter.contains(event.target)) {
          this.setState({ openFilter:null});
        } else {
          this.setState({ openFilter:event.currentTarget});
        }
      };
    
   openModal(id1) {
    this.setState({
      modalIsOpen:true,
      id:id1
    });
       
  }
  openModal1(t,d,d1,I,Token){
    this.setState({
      modalIsOpen1:true,
      title:t,
      desc:d,
      date:d1,
      image:I,
     
    });
       
  }
  closeModal(){
    this.setState({
      modalIsOpen:false,
   
    });
    }
    closeModal1(){
      this.setState({
        modalIsOpen1:false,
        
      });
      }
     
render(){
  const { classes } = this.props;
  const customStyles = ({
    content : {
      
      top                   : '50%',
      left                  : '60%',
      right                 : '0%',
      bottom                : 'auto',
      transform             : 'translate(-50%, -50%)'
    }
  });
 
  return (   
    
     <view className="Card">
       <div className={classes.searchWrapper}>
  
         <form onSubmit={this.handleSubmit}>
           
         <Button  color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={this.openFilter ? "notification-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={(event)=>this.handleClickFilter(event)}
          className={classes.buttonLink} >
          <FilterListIcon/>
        </Button>
        <Popper
          open={Boolean(this.openFilter)}
          anchorEl={this.openFilter}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !this.openFilter }) +
            " " +
           classes.popperNav
          }
          placement="bottom"
          disablePortal={false}
          modifiers={{
            flip: {
              enabled: true,
            },
            preventOverflow: {
              enabled: true,
              boundariesElement: 'scrollParent',
            },
            arrow: {
              enabled: false,
            
            },
          }}
        >
          {({ TransitionProps, placement }) => (
            <Grow 
              {...TransitionProps}
              id="notification-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "top" ? "center top" : "center bottom"
              }}
            >
              <Paper >
                <ClickAwayListener onClickAway={()=>this.handleCloseFilter()}>
                  <MenuList  role="menu">
                    <MenuItem
                      onClick={()=>this.textFilter()}
                      className={classes.dropdownItem}
                    >
                      Search by name
                    </MenuItem>
                    <MenuItem
                      onClick={()=>this.dateFilter()}
                      className={classes.dropdownItem}
                    >
                      Search by date
                    </MenuItem>
                  
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
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
              <Row xs><Button  style={{width:"100px"}} onClick={() => {this.openModal1(announce.body.titre,announce.body.description,announce.body.date_cr,announce.body.image,announce.token)} }color="success" >Details</Button></Row>
          <Row xs><Button  style={{width:"100px"}} onClick={() => {this.openModal(announce.id)} }  color="info" >Edit</Button></Row>
          <Row xs><div style={{width:"100px"}}><HideButton message={announce.id}/></div></Row>
              </Col>
              </Row>
              </Grid>
            </CardBody>
        </Card>
          ) }
        <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={() => {this.closeModal()} }
            style={customStyles}
            contentLabel="Example Modal"
          >
          <Modify  message={this.state.id} style={{width: "400px"}}/>
        </Modal>

        <Modal style={{height: "100%"}}
            isOpen={this.state.modalIsOpen1}
            onRequestClose={() => {this.closeModal1()} }
            style={customStyles}
            contentLabel="Example Modal2"
          >
          <Card2 style={{height: "400px"}}>
                <div className="blogHeader">
                    <h1 className="postTitle">{this.state.title}</h1>
                <span className="postedBy">posted on {new Date(this.state.date).toString().replace(/T/, ' ').replace(/\..+/, '') }</span>
                </div>
                <div className="postContent">
          
          <p>{this.state.desc}</p>
          </div>
                <div  className="postImageContainer">
                    <img src={this.state.image} alt="Post Image" />
                    
                </div>

              
                
          </Card2>
        </Modal>
        </view>        
        
        );
      }
    }
    
    export default withStyles(styles, { withTheme: true })(TableList);