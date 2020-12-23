import React from 'react';
import './style.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Red1 from  '../../assets/red1.jpg';
import Red2 from  '../../assets/red2.jpg';
import Red3 from  '../../assets/red3.jpeg';
/**
* @author
* @function Logo
**/
const slideImages = [
  Red1,
  Red2,
  Red3
];
const properties = {
  duration: 4000,
  transitionDuration: 1000,
  infinite: true,
  repetition:false,
  prevArrow: <div style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
    nextArrow: <div style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
  
};
const Logo = (props) => {
  return(
    <div className="logo">
  
        <Slide  {...properties}>
          <div >
            <div style={{'backgroundImage': `url(${slideImages[0]})`,height:"300px"}}>
              <h1 style={{"font-size": "40px",paddingTop:"40px",color:"white"}}>1</h1>
            </div>
          </div>
          <div >
            <div style={{'backgroundImage': `url(${slideImages[1]})`,height:"300px"}}>
            <h1 style={{"font-size": "40px",paddingTop:"40px",color:"white"}}>2</h1>
            </div>
          </div>
          <div>
            <div style={{'backgroundImage': `url(${slideImages[2]})`,height:"300px"}}>
            <h1 style={{"font-size": "40px",paddingTop:"40px",color:"white"}}>3</h1>
            </div>
          </div>
        </Slide>
    </div>
   )

 }

export default Logo