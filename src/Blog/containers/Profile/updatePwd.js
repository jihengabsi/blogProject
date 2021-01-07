import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import firebase from 'firebase';
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};



  class UpdatePwd extends React.Component   {
  
    constructor() {
      super();
      this.state = {
      users: [],
      oldPwd: '',
      newPwd: '',
      mail:''
       
      }; 
        
    }
    handleChange (evt, field) {
      this.setState({ [field]: evt.target.value });
    
    }
    
    handleSubmit = event => {
        event.preventDefault();
        const user = {
            token:localStorage.getItem('token1'),
            id:localStorage.getItem('ID'),
            password:this.state.oldPwd,
            newPassword: this.state.newPwd,
            email:this.state.mail
     
        
          };
          
      axios.put(`http://localhost:3000/api/users/update/password`, user)
        .then(res => {
          console.log(res);
          console.log(res.data);
          alert("Password updated successfully!");
          window.location = "/blog/profile";
         
        }).catch(error=>{
          console.log(error.message);
          alert("fail!!");
        })
    }
    
    render(){
      const { classes } = this.props;
  return (
    <div style={{width:"80%",right: '37%',paddingTop:"110px"}}>
  
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card style={{width:"100%",left: '50%',}}>
          <form id="form" onSubmit={this.handleSubmit}>
            <CardHeader color="white">
              <h4 className={classes.cardTitleBlack}>Modifier le mot de passe</h4>
            </CardHeader>
            <CardBody>
            <div className="form-group">
                    <label>
Email
</label>
                    <input type="email" className="form-control" placeholder="Email"  onChange={(event)=>this.handleChange(event, "mail")}  />
                </div>
              <div className="form-group">
                    <label>
Ancin mot de passe
</label>
                    <input type="password" className="form-control" placeholder="Ancien mot de passe"  onChange={(event)=>this.handleChange(event, "oldPwd")}  />
                </div>

              
                <div className="form-group">
                    <label>
Nouveau mot de passe
</label>
                    <input type="password" className="form-control" placeholder="Nouveau mot de passe"  onChange={(event)=>this.handleChange(event, "newPwd")}  />
                </div>
              </CardBody>
           
            <CardFooter>
              <Button type="submit"  color="white">Modifier le mot de passe</Button>
            </CardFooter>
            </form>
          </Card>
        </GridItem>
    
      </GridContainer>
      
    </div>

)
}
}

export default withStyles(styles, { withTheme: true })(UpdatePwd);