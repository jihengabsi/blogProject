import React, { Component } from "react";
import './style.css';
import Card from "../../components/UI/Card";
import { Grid } from 'react-flexbox-grid';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {Button} from 'reactstrap';

/**
* @author
* @function Loginbpx
**/

export default class Loginbox extends Component {
    state = {
        Email: '',
        Password: '',
      
     
      }
      componentDidMount() {
        localStorage.clear("token");
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
   
          })
      }
    render() {
  return(
    <div style={{ paddingTop: "10px" }}>
      <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ width: '30%', margin: "auto auto" }}>

        <Grid item xs={3}>
          <Card style={{ background: 'white', marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
            <form onSubmit={this.handleSubmit}>
            <div className="profileImageContainer3">
                <img style={{ width: "80%", display: "block", margin: "auto" }} className="ckl" src={require('../../assets/img/logock.png')} alt="!!!" />
              </div>
              <h3 className="cardHeader3">Login</h3>

              <div className="form-group">
                {/* <label>Email</label> */}
                <input type="email" className="form-control" onChange={(event) => this.handleChange(event, "Email")} placeholder="Enter email" />
              </div>

              <div className="form-group">
                {/* <label>Password</label> */}
                <input type="password" className="form-control" onChange={(event) => this.handleChange(event, "Password")} placeholder="Enter password" />
              </div>
              {/* <p className="forgot-password text-right">
                <NavLink to="/blog/reset">Mot de passe oublié?</NavLink>
              </p> */}
              <Button type="submit" style={{
                backgroundColor:"#dc3545",borderBlockColor:"#dc3545",
                width: "100%", display: "block",
                margin: "auto", fontSize: "16px", fontWeight: "bold"
              }}
                color="danger" >
                Connexion</Button>
             
              {/* <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button> */}
              {/* <p className="forgot-password text-right">
                Pas de compte? <NavLink to="/blog/signup">S'inscrire.</NavLink>
              </p> */}
              
            </form>
            
          </Card>
        </Grid>
      </Grid>

    </div>
      
     );
    }
}