import React, { Component } from "react";
import './style.css';
import Card from '../UI/Card';
import { Grid } from 'react-flexbox-grid';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {Button} from 'reactstrap'

/**
* @author
* @function Loginbpx
**/

export default class Loginbox extends Component {
    state = {
        Email: '',
        Password: '',
      
     
      }
    
      handleChange (evt, field) {
        this.setState({ [field]: evt.target.value });
    
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
            email: this.state.Email,
            password: this.state.Password

        };
    
        axios.post(`http://localhost:3000/api/users/login`, user )
          .then(res => {
            console.log(res);
            console.log(res.data);
            localStorage.setItem('ID', res.data.posted.id);
            localStorage.setItem('token1', res.data.posted.token);
            window.location = "/blog";
            
          }).catch(error=>{
            console.log(error.message);
            alert("fail!!");
          })
      }
    render() {
  return(
      <div style={{paddingTop:"110px"}}>
    <Grid container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{width:'30%', margin: "auto auto"}}>

        <Grid item xs={3}> 
    <Card style={{background:'white', marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
    <form onSubmit={this.handleSubmit}>
    <div className="profileImageContainer3">
                    <img style={{width:"80%",display:"block",margin:"auto"}} className="ckl" src={require('../../assets/Images/logock.png')} alt="!!!" />
    </div>
        <h3 className="cardHeader3">Se Connecter</h3>

        <div className="form-group">
           { //<label htmlFor='mail'>Email</label>
            }
            <input name="mail" type="email" className="form-control" onChange={(event)=>this.handleChange(event, "Email")} placeholder="Email" />
        </div>

        <div className="form-group">
        { //<label htmlFor='pw'>Password</label>
        }
            <input name="pw" type="password" className="form-control" onChange={(event)=>this.handleChange(event, "Password")}  placeholder="Mot de Passe" />
        </div>
        
        
        <Button type="submit" style={{width:"100%",display:"block",
                                      margin:"auto",fontSize:"16px",fontWeight:"bold"}}
                                      color="danger" >
        Connexion</Button>
        <p className="forgot-password text-right">
        <NavLink to="/blog/reset">Mot de passe oublié?</NavLink>
        </p>
        <h5 className="createacc">
            Pas de compte? <NavLink to="/blog/signup">S'inscrire.</NavLink>
        </h5>
    </form>
    
    
    </Card>
    </Grid>
    </Grid>

    </div>
     );
    }
}
//<button style={{width:"40%",height:"12%",display:"block",margin:"auto",fontSize:"14px"}} type="submit" className="btn btn-dark btn-lg btn-block">Login</button>