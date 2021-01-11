import React, { Component } from "react";
import './style.css';
import Card from '../../Blog/components/UI/Card';
import { Grid } from 'react-flexbox-grid';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Login from '../../Blog/components/loginbox/index.js'
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
    
        const admin = {
            mail: this.state.Email,
            password: this.state.Password

        };
    
        axios.post(`http://localhost:3000/api/admins/login`, admin )
          .then(res => {
            console.log(res);
            console.log(res.data);

            localStorage.setItem('token', res.data.posted.token);
            window.location = "/admin";
            
          }).catch(error=>{
            console.log(error.message);
            alert("fail!!");
          })
      }
    render() {
  return(
    // <div style={{ paddingTop: "10px" }}>
    //   <Grid container
    //     spacing={0}
    //     direction="column"
    //     alignItems="center"
    //     justify="center"
    //     style={{ width: '50%', margin: "auto auto" }}>

    //     <Grid item xs={3}>
    //       <Card style={{ background: 'lightgrey', marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
    //         <form onSubmit={this.handleSubmit}>
    //           <h3 className="cardHeader3">Login</h3>

    //           <div className="form-group">
    //             <label>Email</label>
    //             <input type="email" className="form-control" onChange={(event) => this.handleChange(event, "Email")} placeholder="Enter email" />
    //           </div>

    //           <div className="form-group" style={{ margin: "0" }}>
    //             <label>Password</label>
    //             <input type="password" className="form-control" onChange={(event) => this.handleChange(event, "Password")} placeholder="Enter password" />
    //           </div>
    //           <p className="forgot-password text-right">
    //             <NavLink to="/blog/reset">Mot de passe oublié?</NavLink>
    //           </p>

    //           <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
    //           <p className="forgot-password text-right">
    //             Pas de compte? <NavLink to="/blog/signup">S'inscrire.</NavLink>
    //           </p>
    //         </form>
    //         <div className="profileImageContainer2">
    //           <img className="ckl" src={require('../../assets/img/logock.png')} alt="!!!" />
    //         </div>
    //       </Card>
    //     </Grid>
    //   </Grid>

    // </div>
      <Login />
     );
    }
}