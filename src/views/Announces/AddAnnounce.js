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

const useStyles = makeStyles(styles);

// const  classes = useStyles();
export default class AddAnnounce extends Component  {

 state = {
  Title: '',
  Description: '',
  Image: ''


}
 uploadImage() {
  const firebaseConfig = {
    apiKey: "AIzaSyAZugwF5atKtDonzLoygw2FF9vlijtytnQ",
    authDomain: "mini-project-incp.firebaseapp.com",
    databaseURL: "https://mini-project-incp.firebaseio.com",
    projectId: "mini-project-incp",
    storageBucket: "mini-project-incp.appspot.com",
    messagingSenderId: "268706642084",
    appId: "1:268706642084:web:257bb963e4417ccd338e31",
    measurementId: "G-KPWHVF4TZF"
  };
// Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  const ref = firebase.storage().ref();
  const file = document.querySelector("#image").files[0];

  const task = ref.child(file.name).put(file);

  task.then( () => {
      document.getElementById("form").submit();
  });
  alert("upload image");

}

handleChange (evt, field) {
  this.setState({ [field]: evt.target.value });

}

handleSubmit = event => {
  event.preventDefault();
  const file_name = document.querySelector("#image").files[0].name;

  const url="https://firebasestorage.googleapis.com/v0/b/mini-project-incp.appspot.com/o/"+file_name+"?alt=media";
    const announce = {
    titre:this.state.Title,
    description: this.state.Description,
    image:url,
    visib:true      

  };

  axios.post(`http://localhost:3000/api/announces/add`, {announce} )
    .then(res => {
      console.log(res);
      console.log(res.data);
      alert("Announce added successfully!");
      window.location = "/admin/list";
     
    }).catch(error=>{
      console.log(error.message);
      alert("fail!!");
    })
}
 render(){
  
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
          <form  id="form" onSubmit={this.handleSubmit}>
            <CardHeader color="danger">
              <h4 >Add an announce</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
      
                <GridItem xs={12} sm={12} md={6}>
                <br></br>
                <InputLabel style={{ color: "#AAAAAA" }}>Title</InputLabel>
                <br></br>
                     <input style={{width:"240px", border: 'none','border-bottom': '2px solid #AAAAAA ' }} type="text"   onChange={(event)=>this.handleChange(event, "Title")} />
            
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                <br></br>
                <InputLabel style={{ color: "#AAAAAA" }}>Description</InputLabel>
                    <textarea type="text" style={{width:"240px", border: 'none','border-bottom': '2px solid #AAAAAA ',  'height': '80px',"box-sizing": "border-box",  'resize': 'vertical'}}    onChange={(event)=>this.handleChange(event, "Description")} />

                </GridItem>
              </GridContainer>

            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <br></br>
                  <InputLabel style={{ color: "#AAAAAA" }}>Upload image</InputLabel>
                  <br></br>
                   <input type="file" name="image" id="image"  onChange={(event)=>this.handleChange(event, "Image")} />
                </GridItem>
              </GridContainer>
              </CardBody>
           
            <CardFooter>
              <Button type="submit"  onClick={()=>this.uploadImage()} color="danger">Add announce</Button>
            </CardFooter>
            </form>
          </Card>
        </GridItem>
    
      </GridContainer>
    </div>
  );
                  }
}
