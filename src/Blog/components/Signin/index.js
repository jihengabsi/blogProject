import React, { Component } from "react";
import './style.css'
import Card from '../UI/Card';
import { Grid } from 'react-flexbox-grid';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer';
import axios from 'axios';
export default class SignUp extends Component {
    state = {
        FirstName: '',
        LastName: '',
        DateBirth: '',
        Email: '',
        NTel: '',
        Password: '',
      
     
      }
    
      handleChange (evt, field) {
        this.setState({ [field]: evt.target.value });
    
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            DateBirth: this.state.DateBirth,
            Email: this.state.Email,
            NTel: this.state.NTel,
            Password: this.state.Password

        };
    
        axios.post(`http://localhost:3000/api/users/add`, { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    render() {
        return (
<div>
            <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{width:'70%', margin: "auto auto"}}>

                <Grid item xs={3}> 
            <Card style={{background:'lightgrey', marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
            <form onSubmit={this.handleSubmit}>
                <h3 className="cardHeader3">Register</h3>
                
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" name="FirstName" onChange={(event)=>this.handleChange(event, "FirstName")}  placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control"  name="LastName" onChange={(event)=>this.handleChange(event, "LastName")} placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Date de naissance</label>
                    <input type="date" className="form-control"  name="DateBirth" onChange={(event)=>this.handleChange(event, "DateBirth")} placeholder="" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" name="Email" onChange={(event)=>this.handleChange(event, "Email")} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>N° de téléphone</label>
                    <input type="text" className="form-control"  name="NTel" onChange={(event)=>this.handleChange(event, "NTel")}  placeholder="Enter Numéro" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"  name="Password" onChange={(event)=>this.handleChange(event, "Password")}  placeholder="Enter password" />
                </div>

                <button type="submit" style={{margin: "20px 0 0"}} className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered? <NavLink to="/blog/login">log in.</NavLink>
                </p>
            </form></Card>
            </Grid>
            </Grid>
    <Footer></Footer>
    </div>      
        );
    }
}