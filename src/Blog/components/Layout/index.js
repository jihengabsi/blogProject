import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';
import Hero from '../Hero';
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
        <h1>Footer</h1>

<a>Copyright © CK Technologies 2020</a>


    </div>
      </React.Fragment>
    
   )

 }

export default Layout