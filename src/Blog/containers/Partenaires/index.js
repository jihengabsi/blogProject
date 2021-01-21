import React from 'react'
import Signup from '../../components/Signin';
import Partner from '../../components/Partners';
import './style.css';
import Logo from '../../components/logo';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';


/**
* @author
* @function Partenaires
**/

const Partenaires = (props) => {
  return (
    <div>
      <div style={{
        width: "80%",
        margin: "0 auto",
        backgroundColor: "white"
      }}>

        <div style={{ width: "95%", position: "left", paddingLeft: "5%", paddingBottom:"50px"}}>
          <Partner />
        </div>
      </div>
      <Footer />

    </div>
  )

}

export default Partenaires