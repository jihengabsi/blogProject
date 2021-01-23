import React from 'react';
import './style.css';
import Footer from '../../components/Footer';
/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <div>
  <React.Fragment >
          <div className="container">
        {props.children}
     
    </div>
    

      </React.Fragment>
 
    </div>
    
   )

 }

export default Layout