import React from 'react';
import './style.css';
import Card from '../UI/Card';
import Logo from '../logo';
import Navbar from '../Navbar';

/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
        <Card >
            <Navbar />
            <Logo />
        </Card>
   
   )

 }

export default Hero