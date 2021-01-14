import React from 'react';
import './style.css';

import RecentPosts from './RecentPosts';
import logoCK from '../../assets/Images/logock.png';
import fb from '../../assets/facebook-logo.png';
import AllPosts from '../../components/AllPosts';
import Footer from '../../components/Footer';

import Logo from '../../components/logo';


const Home  = props => {
   
    return (
      <div>
        <Logo />
        
        <div  className="Home">
        
                <br></br><br></br>
                    <RecentPosts />
                    <br></br>     
                <AllPosts className="RecentPosts"  ></AllPosts>
             
                <br></br>
          
        </div>
        <div className="footer">
              <Footer></Footer>
              
                

        </div>
        </div>
        
    );
}

export default Home;