/*eslint-disable*/
import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import logoCK from '../../assets/Images/logock.png';
import fb from '../../assets/facebook-logo.png';
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "../../../assets/jss/material-dashboard-react/components/footerStyle.js";


const useStyles = makeStyles(styles);


const Home  = props => {
    const classes = useStyles();
    return (
   
        <footer className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.left}>
            <List  className={classes.list}>
            
             
              <ListItem className={classes.inlineBlock}>
              <NavLink to="/blog">Home</NavLink>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
              <NavLink to="/blog/login">Se connecter</NavLink>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
              <NavLink to="/blog/signup">Créer un Compte</NavLink>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
              <NavLink to="/blog/profile">Profile</NavLink>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
       
              </ListItem>
              
            </List>
          </div>
          <p className={classes.right}>
            <span>
              &copy; {1900 + new Date().getYear()}{" "}
              <a
                href="http://www.ck-metrologie.com/"
                target="_blank"
                className={classes.a}
              >
                CK Métrologie
              </a>
             
            </span>
          </p>
        </div>
     
      </footer>
                   

    
    );
}

export default Home;