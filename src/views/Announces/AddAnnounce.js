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
  fileObj = [];
  fileArray = [];

  componentDidMount() {

    axios.get(`http://localhost:3000/api/rubriques/`)
      .then(res => {
        const Rubriques = res.data;
        this.setState({ Rubriques });
        console.log(Rubriques);
      })

  }

constructor(props) {
  super(props)
  this.state = {
  rubriqueID:'',
  Rubriques:[],
  Title: '',
  Description: '',
  Image: '',
  file: [],
  url:""
  }
  this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
  this.uploadFiles = this.uploadFiles.bind(this)
}

uploadMultipleFiles(e) {
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
  this.fileObj.push(e.target.files)
  for (let i = 0; i < this.fileObj[0].length; i++) {

    const ref = firebase.storage().ref();
   ref.child(this.fileObj[0][i].name).put(this.fileObj[0][i]);

    this.fileArray.push( "https://firebasestorage.googleapis.com/v0/b/mini-project-incp.appspot.com/o/"+this.fileObj[0][i].name+"?alt=media")
  }
  this.setState({ file: this.fileArray })
}

uploadFiles(e) {
  
  e.preventDefault()
  console.log(this.state.file)
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
 

}

handleChange (evt, field) {
  this.setState({ [field]: evt.target.value });

}

handleSubmit = event => {
  event.preventDefault();
  try {
  const file_name = document.querySelector("#image").files[0].name;
  this.setState({
Url:"https://firebasestorage.googleapis.com/v0/b/mini-project-incp.appspot.com/o/"+file_name+"?alt=media"
});
}
catch (exception) {
 this.setState({
   Url: this.state.Image
 });
}
 
    const announce = {
    titre:this.state.Title,
    description: this.state.Description,
    image:this.state.url,
    visib:true,
    rubriqueId:this.state.rubriqueID,
    files:this.state.file,
    visib:false

  };
try{  axios.post(`http://localhost:3000/api/announces/add`, {announce} )
.then(res => {
  console.log(res);
  console.log(res.data);
  alert("Announce added successfully!");
  window.location = "/admin/list";
 
}).catch(error=>{
  console.log(error.message);

})}
catch(error){
  alert("Announce already added!");
}
 
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
                <InputLabel style={{ color: "#AAAAAA" }}>Rubrique</InputLabel>
               
  <select value={this.state.rubriqueID} onChange={(event)=>this.handleChange(event, "rubriqueID")}   className="form-control"  style={{width:'30%'}} >
  { this.state.Rubriques.map(rubrique =>
  <option value={rubrique.id}>{rubrique.body.titre}</option>
  ) }
  </select>
                </GridItem>
              </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <br></br>
                  <InputLabel style={{ color: "#AAAAAA" }}>Upload image</InputLabel>
                  <br></br>
                   <input  type="file" name="image" id="image"   />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <br></br>
                  <InputLabel style={{ color: "#AAAAAA" }}>Upload file</InputLabel>
                  <br></br>
                   <input  type="file" accept=".pdf" name="file" id="file" multiple  onChange={this.uploadMultipleFiles} /*onChange={(event)=>this.handleChange(event, "File")}*/ />
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
