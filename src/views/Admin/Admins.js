import React from "react";
// @material-ui/core components
// core components

import './style.css';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Table from "components/Table/Table";
import InputLabel from "@material-ui/core/InputLabel";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from "components/CustomButtons/Button.js";
import { Link,NavLink,Switch,Route } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Modal from 'react-modal';
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios';
class Admins extends React.Component  {
  
handleChange (evt, field) {
  this.setState({ [field]: evt.target.value });

}
delete= event => {
  event.preventDefault();

  const admin1 = {
    admin : {
    id:this.state.Id,
    uid:this.state.Uid,
    token:localStorage.getItem('token'), 
    }
  };
  console.log(admin1);
  axios.put(`http://localhost:3000/api/admins/delete`,admin1)
    .then(res => {
      console.log(res);
      console.log(res.data);
      alert("Admin successfully deleted!");
      window.location = "/admin/Admin's";
     
    }).catch(error=>{

      alert("Erreur!!!");
    
    })
}
handleSubmit = event => {
  event.preventDefault();

  const admin = {
    login:this.state.Login,
    mail:this.state.Email,
    role:this.state.Role,
    password:this.state.Password,
    phoneNumber:this.state.PhoneNumber, 
  };

  axios.post(`http://localhost:3000/api/admins/add`, {admin })
    .then(res => {
      console.log(res);
      console.log(res.data);
      alert("Admin ajouté avec succées!");
      window.location = "/admin/Admin's";
     
    }).catch(error=>{
      console.log(error.message);
      alert("Il faut remplir tous les champs!!!");
    })
}
  componentDidMount() {
    axios.get(`http://localhost:3000/api/admins/`)
      .then(res => {
        const admins = res.data;
        this.setState({ admins });
      })
  }
  constructor() {
    super();
    this.state = {
    admins: [],
    modalIsOpen:false,
    modal1IsOpen:false,
    Login:"",
    Email:"",
    Role:"",
    Password:"",
    PhoneNumber:"",
    Id:"",
    Uid:""
    }; 
      
  }

  openModal() {
    this.setState({
      modalIsOpen:true,
    
    });
       
  }
  openModal1(id,uid) {
    this.setState({
      modal1IsOpen:true,
      Id:id,
      Uid:uid
    });
       
  }
  closeModal1() {
    this.setState({
      modal1IsOpen:false,
    });
       
  }
  closeModal() {
    this.setState({
      modalIsOpen:false,
    });
       
  }
 

 
  render(){
    const customStyles = {
      content : {
     
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };
  return (   
     <view>
    
     <Card > 
  <CardBody>
  <Grid fluid>
    <Row>
    <Col  xs >
<h4 >Liste des admins <Button   onClick={()=>this.openModal()} color="white"><AddIcon name="add"></AddIcon>Ajouter</Button></h4>

   </Col>
  
    </Row>
    <Row>
   
    </Row>
    <Row>
    <Table
              tableHeaderColor="gray"
              tableHead={["Login", "Email", "Num de téléphone","Actions"]}
              tableData={this.state.admins.map(admin =>[
        
               admin.body.login,admin.body.mail, admin.body.phoneNumber ,<Button onClick={()=>this.openModal1(admin.id,admin.body.uid)}  color="danger">Supprimer</Button>
                
                ,
               
               
              ]
              )}
              
            />
    </Row>
    </Grid>
 
  </CardBody>
  
</Card>
<Modal isOpen={this.state.modal1IsOpen}
            onRequestClose={() => {this.closeModal1()} }
            style={customStyles}
            contentLabel="Example Modal"
        >
<form onSubmit={this.delete}>   
<h2 >Supprimer un admin</h2>
<Button  type="submit">Supprimer</Button>
            
            <Button  onClick={()=>this.closeModal1()}>Annuler</Button>
</form>
          </Modal>
<Modal isOpen={this.state.modalIsOpen}
            onRequestClose={() => {this.closeModal()} }
            style={customStyles}
            contentLabel="Example Modal"
        >
 
 <form onSubmit={this.handleSubmit}>          
         
          <h2 >Ajouter un admin</h2>
     
          <br></br>
                <InputLabel style={{ color: "#AAAAAA" }}>Login</InputLabel>

                     <input style={{width:"240px", border: 'none','border-bottom': '2px solid #AAAAAA ' }} type="text"   onChange={(event)=>this.handleChange(event, "Login")} />
                     <br></br><br></br>                     <InputLabel style={{ color: "#AAAAAA" }}>Email</InputLabel>

<input style={{width:"240px", border: 'none','border-bottom': '2px solid #AAAAAA ' }} type="Email"   onChange={(event)=>this.handleChange(event, "Email")} />
<br></br><br></br>
<InputLabel style={{ color: "#AAAAAA" }}>Role</InputLabel>

<input style={{width:"240px", border: 'none','border-bottom': '2px solid #AAAAAA ' }} type="text"   onChange={(event)=>this.handleChange(event, "Role")} />
<br></br><br></br>
<InputLabel style={{ color: "#AAAAAA" }}>Mot de passe</InputLabel>

<input style={{width:"240px", border: 'none','border-bottom': '2px solid #AAAAAA ' }} type="password"   onChange={(event)=>this.handleChange(event, "Password")} />
<br></br><br></br><InputLabel style={{ color: "#AAAAAA" }}>Num de téléphone</InputLabel>

<input style={{width:"240px", border: 'none','border-bottom': '2px solid #AAAAAA ' }} type="text"   onChange={(event)=>this.handleChange(event, "PhoneNumber")} />
           
<br></br><br></br>            <Button  type="submit">Ajouter</Button>
            
            <Button  onClick={()=>this.closeModal()}>Annuler</Button>
          </form>
        </Modal>
</view>        
        
        );
      }
    }
    
    export default withStyles( { withTheme: true })(Admins);