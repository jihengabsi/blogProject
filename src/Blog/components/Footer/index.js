/*eslint-disable*/
import React from 'react';
import './style.css';
import logo from "../../assets/Images/logock.png";

// core components



const Footer  = props => {
  
    return (
   <div>
    
        {/*---- Include the above in your HEAD tag --------*/}
        <footer className="section footer-classic context-dark bg-image" style={{background: 'lightGrey'}}>
          <div className="container">
            <div className="row row-30">
              <div className="col-md-4 col-xl-5">
                <div className="pr-xl-4"><a className="brand" href="index.html"><img className="brand-logo-light" src={logo} alt="" width={140} height={80} srcSet="images/agency/logo-retina-inverse-280x74.png 2x" /></a>
                 
                  {/* Rights*/}
                  <p className="rights"><span>©&nbsp; </span><span className="copyright-year">2020</span><span>© 2020 Made With &#10084;&#65039;  By Inceptum </span></p>
                </div>
              </div>
              <div className="col-md-4">
                <h5>Contacts</h5>
                <dl className="contact-list">
                  <dt>Addresse:</dt>
                  <dd>CK métrologie Zone Industrielle Choutrana
Lot 131, B.P. 115
2088 Ariana</dd>
                </dl>
                <dl className="contact-list">
                  <dt>Email:</dt>
                  <dd><a href="mailto:#">contact@ck-metrologie.com</a></dd>
                </dl>
                <dl className="contact-list">
                  <dt>Tél:</dt>
                  <dd><a href="tel:#">(+216) 70 68 54 00</a> <span>ou</span> <a href="tel:#">Fax : (+216) 70 68 54 01</a>
                  </dd>
                </dl>
              </div>
              <div className="col-md-4 col-xl-3">
                <h5>Links</h5>
                <ul className="nav-list">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contacts</a></li>
                  <li><a href="#">Pricing</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row no-gutters social-container">
            <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-facebook" /><span>Facebook</span></a></div>
            <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-instagram" /><span>instagram</span></a></div>
            <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-twitter" /><span>twitter</span></a></div>
            <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-youtube-play" /><span>google</span></a></div>
          </div>
        </footer>

    </div>
    );
}

export default Footer;