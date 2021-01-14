import React, { Component } from "react";
import './style.css';
import Card from '../UI/Card';
import { Grid } from 'react-flexbox-grid';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {Button} from 'reactstrap';

/**
* @author
* @function Reset
**/

export default class Reset extends Component {
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
         
        };
    
        axios.post(`http://localhost:3000/api/users/reset`, user )
          .then(res => {
            console.log(res);
            console.log(res.data);
            alert("email sent!");
         
        window.location = "/blog";
          
          }).catch(error=>{
            console.log(error.message);

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
                <img style={{ width: "80%", display: "block", margin: "auto" }} className="ckl" src={require('../../assets/Images/logock.png')} alt="!!!" />
              </div>
        <h3 className="cardHeader3">Reset Password</h3>

        

        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" onChange={(event)=>this.handleChange(event, "Email")} placeholder="Enter email" />
        </div>

      
      
        <Button type="submit" style={{
                width: "100%", display: "block",
                margin: "auto", fontSize: "16px", fontWeight: "bold"
              }}
                color="danger" >
                Envoyer</Button>

        
    </form>
    
    </Card>
    </Grid>
    </Grid>

    </div>
     );
    }
}