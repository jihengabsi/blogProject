import React from 'react';
import './style.css';

import RecentPosts from './RecentPosts';
import logoCK from '../../assets/Images/logock.png';
import fb from '../../assets/facebook-logo.png';
import AllPosts from '../../components/AllPosts';
import Footer from '../../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
        marginLeft:theme.spacing(45),
      },
    },
  }));
const Home  = props => {
    const classes = useStyles();
    return (
        <div  className="Home">
    
                    <RecentPosts className="RecentPosts" />
                        
                <AllPosts ></AllPosts>
                <div  style={{"left": "500px"}}> <div  className={classes.root}>

<Pagination   count={10} color="secondary" />

</div></div>
                <br></br>
                <div className="footer">
              <Footer></Footer>
                

        </div>
        </div>
        
    );
}

export default Home;