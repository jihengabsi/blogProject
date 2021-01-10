import React, { Component } from "react";
import './style.css'
import Card from '../UI/Card';
import { Grid } from 'react-flexbox-grid';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer';
import axios from 'axios';
import { Button } from 'reactstrap';

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
            name: this.state.FirstName,
            surname: this.state.LastName,
            DateBirth: this.state.DateBirth,
            email: this.state.Email,
            phoneNumber: this.state.NTel,
            password: this.state.Password,
            role:"user"

        };
    
        axios.post(`http://localhost:3000/api/users/add`, { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
        
            window.location = "/blog";

          }).catch(error=>{
            console.log(error.message);
          })
      }
    render() {
        return (
    <div style={{paddingTop:"110px"}}>
            <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{width:'50%', margin: "auto auto"}}>

                <Grid item xs={3}> 
            <Card style={{background:'white', marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
            <form onSubmit={this.handleSubmit}>
                <h3 className="cardHeader3">Créer une compte</h3>
                
                <div className="form-group">
                    <input type="text" className="form-control" name="FirstName" onChange={(event)=>this.handleChange(event, "FirstName")}  placeholder="Prénom" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control"  name="LastName" onChange={(event)=>this.handleChange(event, "LastName")} placeholder="Nom" />
                </div>
                

                <div className="form-group">
                    <input type="email" className="form-control" name="Email" onChange={(event)=>this.handleChange(event, "Email")} placeholder="Email" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control"  name="NTel" onChange={(event)=>this.handleChange(event, "NTel")}  placeholder="Numéro" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control"  name="Password" onChange={(event)=>this.handleChange(event, "Password")}  placeholder="Mot de Passe" />
                </div>

                {/* Date doesn't support placeholder so a label is necessary*/}
                <div style={{display: 'flex',flexDirection:'row'}} className="form-group"> 
                    <label style={{display:"block",margin:"auto",width:"47%",fontSize:"16px",marginLeft:"3%"}}>Date de Naissance :</label>
                    <input type="date" style={{width:'50%'}} className="form-control"  name="DateBirth" onChange={(event)=>this.handleChange(event, "DateBirth")} placeholder="jj/mm/aaaa" />
                </div>

                <Button type="submit" style={{width:"100%",display:"block",
                                      margin:"auto",fontSize:"16px",fontWeight:"bold"}}
                                      color="danger" >
                Inscription</Button>
                <p className="forgot-password text-right">
                    Déjà inscrit? <NavLink to="/blog/login">Se connecter.</NavLink>
                </p>
            </form></Card>
            </Grid>
            </Grid>
    <Footer></Footer>
    </div>      
        );
    }
}