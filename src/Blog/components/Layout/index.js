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
        <Sidebar />
    </div>
    <div className="footer">
        <h1>Footer</h1>
        <a>Something here to give the footer a purpose!</a> <br></br>
<a>Copyright © Your Website 2020</a>


    </div>
      </React.Fragment>
    
   )

 }

export default Layout