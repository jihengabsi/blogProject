import React from 'react';
import './style.css';

import RecentPosts from './RecentPosts';
import logoCK from '../../assets/Images/logock.png';
import fb from '../../assets/facebook-logo.png';
import AllPosts from '../../components/AllPosts';
import Footer from '../../components/Footer';
import Grid from '@material-ui/core/Grid';
import Logo from '../../components/logo';
import Text from './Text/index.js'

const Home  = props => {
    // const { height, width } = useWindowDimensions();
    return (
        <div>
            
                
                
                <Logo  />
                
                <div className="Home">
                    {/* <Text />  */}
                    <br></br><br></br>
                    
                     <RecentPosts  />   
                    <AllPosts className="RecentPosts"  ></AllPosts>

            </div>
            
            <div className="footer">
                <Footer></Footer>
            </div>
        </div>

    );
}

export default Home;