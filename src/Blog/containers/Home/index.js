import React from 'react';
import './style.css';

import RecentPosts from './RecentPosts';

import AllPosts from '../../components/AllPosts';


const Home  = props => {

    return (
        <div  className="Home">
    
                    <RecentPosts className="RecentPosts" />
                        
                <AllPosts ></AllPosts>
                

        </div>
    );
}

export default Home;