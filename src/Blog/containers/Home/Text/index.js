import React from 'react'
import BeforeAfterReact from 'before-after-react'
import './style.css'

import Login from './../../../components/loginbox'
import Sign from './../../../components/Signin'
/**
* @author
* @function text
**/

const Text = (props) => {
  return(
        <div>
        <div  style={{borderBottomWidth:'10px',
        borderColor:"beige", 
        fontSize:"12px",width:"80%",position:"left",paddingLeft:"20%",
        paddingRight:"0%",paddingTop:"40px",textAlign: "left"}}>
         
        <h2>CK MÉTROLOGIE est une Société Anonyme au capital de 400,000 Dinars.</h2> 
        <h3 >L’investissement globale s'élève à un million cent dinars, bouclé avec le concours de la BFPME et la BIAT. Elle a été crée en juillet 2006, et a commencé à fournir des prestations aux industriels tunisiens en septembre 2007.</h3>
     
        </div>

        {/* <div class="hello"> <Login /> </div>

        <div class="hello2"> < Sign  /> </div> */}

        
        
        
        
        </div>
   )

 }

export default Text