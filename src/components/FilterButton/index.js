import React from 'react';
import Button from "components/CustomButtons/Button.js";
import classNames from "classnames";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";
import './style.css';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Image from "./PVC-Expomoda-0005-Dark-Grey.jpg";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Link,NavLink,Switch,Route } from 'react-router-dom';
import Search from "@material-ui/icons/Search";
import FilterListIcon from '@material-ui/icons/FilterList';
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import Modify from "./ModifyAnnounce.js";
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



class FilterButton extends React.Component {
    constructor(props) {
      super(props);
      this.handleHideClick = this.handleHideClick.bind(this);
      this.handleUnhideClick = this.handleUnhideClick.bind(this);
      this.state = {isHidden: false};
      const [openFilter, setopenFilter] = React.useState(null);
      const handleClickFilter = event => {
        if (openFilter && openFilter.contains(event.target)) {
          setopenFilter(null);
        } else {
          setopenFilter(event.currentTarget);
        }
      };
      const handleCloseFilter = () => {
        setopenFilter(null);
      };
    
      const [startDate, setStartDate] = useState(new Date());
    }
 
  
    handleHideClick() {
      this.setState({isHidden: true});
      {alert("L'article n'est plus visible.")}
      
    }
  
    handleUnhideClick() {
      this.setState({isHidden: false});
      {alert("L'article est maintenant visible.")}
    }
  
    render() {
      const isHidden = this.state.isHidden;
      let button;
  
      if (isHidden) {
        button = <UnhideButton onClick={this.handleUnhideClick} />;
      } else {
        button = <HideButton onClick={this.handleHideClick} />;
      }
  
      return (
        <div>
          {button}
        </div>
      );
    }
  }
  
  
  
  function HideButton(props) {
    return (
        <Button  color={window.innerWidth > 959 ? "transparent" : "white"}
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
        aria-owns={openFilter ? "notification-menu-list-grow" : null}
        aria-haspopup="true"
        onClick={handleClickFilter}
        className={classes.buttonLink} >
        <FilterListIcon/>
      </Button>
      <Poppers
        open={Boolean(openFilter)}
        anchorEl={openFilter}
        transition
        disablePortal
        className={
          classNames({ [classes.popperClose]: !openFilter }) +
          " " +
          classes.popperNav
        }
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
              <ClickAwayListener onClickAway={handleCloseFilter}>
                <MenuList  role="menu">
                  <MenuItem
                    onClick={handleCloseFilter}
                    className={classes.dropdownItem}
                  >
                    Search by name
                  </MenuItem>
                  <MenuItem
                    onClick={handleCloseFilter}
                    className={classes.dropdownItem}
                  >
                    Search by date
                  </MenuItem>
                
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Poppers>
     <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    
        <Button style={{ width: '100%' }}  onClick={props.onClick} type="button" color="warning">Hide</Button>
    );
  }
  
  function UnhideButton(props) {
    return (
        <Button style={{ width: '100%' }}  onClick={props.onClick} type="button" color= "danger">Unhide</Button>
    );
  }
  

  export default FilterButton