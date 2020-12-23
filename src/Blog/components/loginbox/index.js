import React from 'react';
import './style.css';
import Card from '../UI/Card';
import { Grid } from 'react-flexbox-grid';
import { NavLink } from 'react-router-dom';
import {logo} from '../../assets/Images/logock.png';
import Footer from '../../components/Footer';
/**
* @author
* @function Loginbpx
**/

const Loginbox = (props) => {

    
  return(
      <div>
    <Grid container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{width:'50%', margin: "auto auto"}}>

        <Grid item xs={3}> 
    <Card style={{background:'lightgrey', marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
    <form>
        <h3 className="cardHeader3">Login</h3>

        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group" style={{margin: "0"}}>
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <p className="forgot-password text-right">
            <a href="#">Mot de passe oublié?</a>
        </p>

        <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
        <p className="forgot-password text-right">
            Pas de compte? <NavLink to="/blog/signup">S'inscrire.</NavLink>
        </p>
    </form>
    <div className="profileImageContainer2">
                    <img className="ckl" src={require('../../assets/Images/logock.png')} alt="!!!" />
                </div>
    </Card>
    </Grid>
    </Grid>
    <Footer></Footer>
    </div>



      /*<div className="loginContainer" style={{
          width: props.width
      }}>
       
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader2">
                    <span>Login</span>
                </div>
                <div className="login">
                <form>
                <input type="text" classname="inputdata" placeholder="Username" />
                <br></br>
                <input type="text" classname="inputdata" placeholder="Password" />
                <br></br>
                <Button>Submit</Button>
                </form>
            
                </div>
                <div className="profileImageContainer2">
                    <img src={logoCK} alt="!!!" />
                </div>
            </Card>
      </div>*/
    
   )

 }

export default Loginbox