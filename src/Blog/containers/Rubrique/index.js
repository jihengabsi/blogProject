import React from 'react'
import Signup from '../../components/Signin';
import Partner from '../../components/Partners';
import './style.css';
import Logo from '../../components/logo';
import Layout from '../../components/Layout';
import AllPostsRubrique from 'Blog/components/AllPostsRubrique';
import Footer from '../../components/Footer';



/**
* @author
* @function Rubrique
**/

const Rubrique = (props) => {

  console.log(props);
  return(
      <div >
          <br></br><br></br><br></br>

          

    <div className="Home">
        <Layout>
        <AllPostsRubrique  {...props}></AllPostsRubrique>
    </Layout>
  </div>
             
        <Footer></Footer>
    </div>
    

   )

 }

export default Rubrique