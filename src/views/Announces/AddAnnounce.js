import React, { Component } from "react";
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
import axios from 'axios';
import avatar from "assets/img/faces/marc.jpg";
import { useHistory } from 'react-router-dom';
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

const useStyles = makeStyles(styles);

// const  classes = useStyles();
export default class AddAnnounce extends Component  {

 state = {
  Title: '',
  Description: '',
  Image: 'test'


}

handleChange (evt, field) {
  this.setState({ [field]: evt.target.value });

}

handleSubmit = event => {
  event.preventDefault();

  const announce = {
    titre:this.state.Title,
    description: this.state.Description,
    image: this.state.Image,
  
      

  };

  axios.post(`http://localhost:3000/api/announces/add`, {announce} )
    .then(res => {
      console.log(res);
      console.log(res.data);

      window.location = "/blog";
      alert("success!!");
    }).catch(error=>{
      console.log(error.message);
    })
}
 render(){
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
          <form onSubmit={this.handleSubmit}>
            <CardHeader color="danger">
              <h4 >Add an announce</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
      
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Title"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onChange={(event)=>this.handleChange(event, "Title")} 
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>

                  <CustomInput
                    labelText="Decription.."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                    onChange={(event)=>this.handleChange(event, "Description")} 
                  />
                </GridItem>
              </GridContainer>

            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <br></br>
                  <InputLabel style={{ color: "#AAAAAA" }}>Upload image</InputLabel>
                  <br></br>
                   <input type="file" name="image"  onChange={(event)=>this.handleChange(event, "Image")} />
                </GridItem>
              </GridContainer>
              </CardBody>
           
            <CardFooter>
              <Button type="submit" color="danger">Add announce</Button>
            </CardFooter>
            </form>
          </Card>
        </GridItem>
    
      </GridContainer>
    </div>
  );
                  }
}
