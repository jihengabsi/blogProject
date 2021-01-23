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
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios';
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



export default class ModifyAnnounce extends Component  {
  fileObj = [];
  fileArray = [];

constructor(props) {
  super(props)
  this.state = {
    announces:[],
  rubriqueID:'',
  Rubriques:[],
  Title: '',
  Description: '',
  Image: '',
  file: [],
  Url:''

      
  }
  this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
  this.uploadFiles = this.uploadFiles.bind(this)
}
  componentDidMount() {
    axios.get(`http://localhost:3000/api/rubriques/`)
    .then(res => {
      const Rubriques = res.data;
      this.setState({ Rubriques });
      console.log(Rubriques);
      const rubriqueID=this.state.Rubriques.map(rubrique =>rubrique.id);
      this.setState({ rubriqueID });
    })

    axios.get(`http://localhost:3000/api/announces/${this.props.message}`)
      .then(res => {
        const announces = res.data;
        
        this.setState({ announces });
        const Title=this.state.announces.map(announce =>announce.body.titre);

        this.setState({ Title });
        const Description=this.state.announces.map(announce =>announce.body.description);
        this.setState({ Description });
        const Image=this.state.announces.map(announce =>announce.body.image);
        this.setState({ Image });
     
      })
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
    try {
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
 catch (exception) {
  this.setState({
    Url: this.state.Image
  });
  
}
  
  }

  handleChange (evt, field) {
    this.setState({ [field]: evt.target.value });
  
  }
  removeItem(item){}
  handleSubmit = event => {
   
    event.preventDefault();
    const file_name = document.querySelector("#image").files[0].name;

    const url="https://firebasestorage.googleapis.com/v0/b/mini-project-incp.appspot.com/o/"+file_name+"?alt=media";	
    const announce = {
      token:localStorage.getItem('token'),
      id:this.props.message,
      titre:this.state.Title,
      description: this.state.Descriptions,
      image: url,
      rubriqueId:this.state.rubriqueID,
      files:this.state.file 
      
  
    };

    axios.put(`http://localhost:3000/api/announces/put`, announce)
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert("Announce modified successfully!")
        window.location = "/admin/list";
       
      }).catch(error=>{
        console.log(error.message);

      })
   
  }

  render(){
    const { classes } = this.props;
    
  return (

    <div >
    
     
     
          <Card>
          <form id="form" onSubmit={this.handleSubmit}>
            <CardHeader color="danger">
              
              <h4 >Modify an announce</h4>
            </CardHeader>
            <CardBody >
             
                <br></br>
                <InputLabel style={{ color: "#AAAAAA" }}>Title</InputLabel>
                <br></br>
                <input style={{width:"240px", border: 'none','border-bottom': '2px solid #AAAAAA ' }} value={this.state.Title} type="text"   onChange={(event)=>this.handleChange(event, "Title")} />
                
              <br></br>
                <br></br>
                <InputLabel style={{ color: "#AAAAAA" }}>Description</InputLabel>
                <textarea type="text" value={this.state.Description} style={{width:"240px", border: 'none','border-bottom': '2px solid #AAAAAA ',  'height': '80px',"box-sizing": "border-box",  'resize': 'vertical'}}    onChange={(event)=>this.handleChange(event, "Description")} />
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
               
                  { this.state.announces.map(announce =>(announce.body.files || []).map(url => (
                     <div>
 <a href={url}>{url.split('/').pop().split('#')[0].split('?')[0]}</a> 
 <Button type="submit" style={{borderRadius:"100px",height:"22px",marginLeft:"10px",alignItems: "center",fontSize: "15px"}}   class="btn btn-danger btn-sm" color="danger">-</Button>
 <br></br>
 </div>
                     
                     
                    )))}
                  <br></br>
                  <input  type="file" accept=".pdf" name="file" id="file" multiple  onChange={this.uploadMultipleFiles} /*onChange={(event)=>this.handleChange(event, "File")}*/ />
                </GridItem>
              </GridContainer>
              </CardBody>
           
            <CardFooter>
              <Button type="submit"  onClick={()=>this.uploadImage()} color="danger">Modify announce</Button>
            </CardFooter>
            </form>
          </Card>


    </div>
       
       );
      }
    }
