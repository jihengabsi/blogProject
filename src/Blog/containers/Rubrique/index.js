import React from 'react'
import Signup from '../../components/Signin';
import Partner from '../../components/Partners';
import './style.css';
import Logo from '../../components/logo';
import Layout from '../../components/Layout';
import AllPostsRubrique from 'Blog/components/AllPostsRubrique';



/**
* @author
* @function Rubrique
**/

const Rubrique = (props) => {
  return(
      <div>
          <br></br><br></br><br></br><br></br><br></br>

    <Layout >
        
        <AllPostsRubrique/> 
    </Layout>
  
             

    </div>
    

   )

 }

export default Rubrique