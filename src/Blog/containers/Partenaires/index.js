import React from 'react'
import Signup from '../../components/Signin';
import Partner from '../../components/Partners';
import './style.css';
import Logo from '../../components/logo';
import Layout from '../../components/Layout';



/**
* @author
* @function Partenaires
**/

const Partenaires = (props) => {
  return(
      <div className="Home">
          <br></br><br></br><br></br><br></br><br></br>

    <Layout >
        
        <Partner />
    </Layout>
  
             

    </div>
    

   )

 }

export default Partenaires