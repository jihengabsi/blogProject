/*eslint-disable*/
import React from 'react';
import './style.css';
import logo from "../../assets/Images/logock.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

// core components



const Footer  = props => {
  
    return (
      <div>

        {/*---- Include the above in your HEAD tag --------*/}
        <footer className="section footer-classic context-dark bg-image" style={{ background: 'lightGrey' }}>
          <div className="container">
            <div className="row row-30">
              <div className="col">


                  <a className="brand" href="index.html"><img className="brand-logo-light" src={logo} alt="" width={140} height={80} srcSet="images/agency/logo-retina-inverse-280x74.png 2x" /></a>

                  {/* Rights*/}
                  <p style={{marginTop:"5px"}} className="rights"><span>©&nbsp;</span><span className="copyright-year">2021</span><span> CK Métrologie. Created by Inceptum.</span></p>


              </div>
              <div className="col">
                {/* <h5>Contacts</h5> */}
                <dl className="contact-list">
                <dt>Email:</dt>
                  <dd><a href="mailto:#">contact@ck-metrologie.com</a></dd>
                  <dt>Addresse:</dt>
                  <dd>CK métrologie Zone Industrielle Choutrana
                  Lot 131, B.P. 115
                  2088 Ariana</dd>


                  
                </dl>
                
              </div>
              <div className="col">

                <dl className="contact-list">
                  <dt>Tél:</dt>
                  <dd><a href="tel:#">(+216) 70 68 54 00</a>
                  </dd>

                  <dt>Fax:</dt>
                  <dd><a href="tel:#">(+216) 70 68 54 01</a>
                  </dd>
                </dl>
                {/* <h5>Links</h5> */}
                
              </div>
              <div className="col">

                <dl className="contact-list">
                  <dt>Suivez Nous:</dt>
                  <ul className="nav-list">

                  <a style={{paddingRight:"20px"}} href="https://www.facebook.com/"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                  <a style={{paddingRight:"20px"}} href="https://www.twitter.com/" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a style={{paddingRight:"20px"}} href="https://www.instagram.com/"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                  <a style={{paddingRight:"20px"}} href="https://www.youtube.com/" className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                  </a>
                </ul>
                </dl>
                {/* <h5>Links</h5> */}

              </div>
            </div>
          </div>
          <div className="row no-gutters social-container">
            {/* <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-facebook" /><span>Facebook</span></a></div>
            <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-instagram" /><span>instagram</span></a></div>
            <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-twitter" /><span>twitter</span></a></div>
            <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-youtube-play" /><span>google</span></a></div> */}
          
          </div>
        </footer>

      </div>
    );
}

export default Footer;