import React from 'react';
import './style.css';

import RecentPosts from './RecentPosts';

import AllPosts from '../../components/AllPosts';


const Home  = props => {

    return (
        <div  className="Home">
    
                    <RecentPosts className="RecentPosts" />
                        
                <AllPosts ></AllPosts>
                <div className="footer">

                    <a>Copyright © CK Technologies 2020</a>
                </div>
                

        </div>
        
    );
}

export default Home;