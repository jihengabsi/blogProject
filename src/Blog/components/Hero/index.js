import React from 'react';
import './style.css';
import Card from '../UI/Card';
import Logo from '../logo';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'reactstrap';
import Navbar1 from '../Navbar/index.js';

/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
        <Card >
         <Navbar  fixed="top"  >
    <Navbar1></Navbar1>
</Navbar>
         
        </Card>
   
   )

 }

export default Hero