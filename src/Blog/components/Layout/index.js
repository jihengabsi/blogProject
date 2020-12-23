import React from 'react';
import './style.css';
import Footer from '../../components/Footer';
/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
      <React.Fragment >
          <div className="container">
        {props.children}
        
    </div>
    <div className="footer">



    </div>
    <Footer></Footer>
      </React.Fragment>
    
   )

 }

export default Layout