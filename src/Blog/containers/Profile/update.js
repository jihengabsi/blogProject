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



  class UpdateProfile extends React.Component   {
    componentDidMount() {
    
      axios.get(`http://localhost:3000/api/users/${this.state.id}`)
        .then(res => {
          const users = res.data;
          this.setState({ users });
          const name=this.state.users.map(user =>user.body.name);
        this.setState({ name });
        const surname=this.state.users.map(user =>user.body.surname);
        this.setState({ surname });
        })
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
    constructor() {
      super();
      this.state = {
      users: [],
      id: localStorage.getItem('ID'),
      name: '',
      surname: '',
      Image: 'test',
     
       
      }; 
        
    }
    handleChange (evt, field) {
      this.setState({ [field]: evt.target.value });
    
    }
    
    handleSubmit = event => {
      event.preventDefault();
      const file_name = document.querySelector("#image").files[0].name;
  
      const url="https://firebasestorage.googleapis.com/v0/b/mini-project-incp.appspot.com/o/"+file_name+"?alt=media";
      const user = {
        token:localStorage.getItem('token1'),
        id:localStorage.getItem('ID'),
        name:this.state.name,
        surname: this.state.surname,
        image: url    
    
      };
      
      axios.put(`http://localhost:3000/api/users/update`, user)
        .then(res => {
          console.log(res);
          console.log(res.data);
          alert("User updated successfully!");
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
              <h4 className={classes.cardTitleBlack}>Modifier le profile</h4>
            </CardHeader>
            <CardBody>
            
              <div className="form-group">
                    <label>
Prénom
</label>
                    <input type="text" className="form-control" value={this.state.name} placeholder="Prénom"  onChange={(event)=>this.handleChange(event, "name")}  />
                </div>

                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" className="form-control" value={this.state.surname}  placeholder="Nom" onChange={(event)=>this.handleChange(event, "surname")}  />
                </div>
                

{/*               
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email" />
                </div>

                <div className="form-group">
                    <label>N° de téléphone</label>
                    <input type="text" className="form-control" placeholder="N° de téléphone"  />
                </div>

                 */}
                  <br></br>
                  <InputLabel style={{ color: "#AAAAAA" }}>Choisir une image</InputLabel>
                  <br></br>
                  <input type="file" name="image" name="image" id="image"  onChange={(event)=>this.handleChange(event, "Image")}/>
   
              </CardBody>
           
            <CardFooter>
              <Button type="submit"  onClick={()=>this.uploadImage()} color="white">Modifier le profile</Button>
            </CardFooter>
            </form>
          </Card>
        </GridItem>
    
      </GridContainer>
      
    </div>

)
}
}

export default withStyles(styles, { withTheme: true })(UpdateProfile);