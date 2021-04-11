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
class Rubriques extends React.Component  {
  
handleChange (evt, field) {
  this.setState({ [field]: evt.target.value });

}

handleSubmit = event => {
  event.preventDefault();

  const rubrique = {
    title:this.state.Title,
    
  };

  axios.post(`http://localhost:3000/api/rubriques/add`, {rubrique})
    .then(res => {
      console.log(res);
      console.log(res.data);
      alert("Rubrique ajouté avec succées!");
      window.location = "/admin/rubList";
     
    }).catch(error=>{
      console.log(error.message);
      alert("Il faut remplir tous les champs!!!");
    })
}
  componentDidMount() {
    axios.get(`http://localhost:3000/api/rubriques/`)
      .then(res => {
    
        const Rubriques = res.data.filter((rubrique) => rubrique.body.isSub !== true);
        this.setState({ Rubriques });
      })
  }
  constructor() {
    super();
    this.state = {
    Rubriques: [],
    modalIsOpen:false,
    modal1IsOpen:false,
    Title:"",
    }; 
      
  }

  openModal() {
    this.setState({
      modalIsOpen:true,
    
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
<h4 >Liste des rubriques <Button   onClick={()=>this.openModal()} color="white"><AddIcon name="add"></AddIcon>Ajouter</Button></h4>

   </Col>
  
    </Row>
    <Row>
   
    </Row>
    <Row>
    <Table
              tableHeaderColor="gray"
              tableHead={["Titre","Actions"]}
              tableData={this.state.Rubriques.map(rubrique =>[
        
                rubrique.body.titre,<Button onClick={()=>this.openModal1(rubrique.id)}  color="danger">Supprimer</Button>
                
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
<h2 >Delete an admin</h2>
<Button  type="submit">Delete</Button>
            
            <Button  onClick={()=>this.closeModal1()}>Cancel</Button>
</form>
          </Modal>
<Modal isOpen={this.state.modalIsOpen}
            onRequestClose={() => {this.closeModal()} }
            style={customStyles}
            contentLabel="Example Modal"
        >
 
 <form onSubmit={this.handleSubmit}>          
         
          <h2 >Ajouter une rubrique</h2>
     
          <br></br>
                <InputLabel style={{ color: "#AAAAAA" }}>Titre</InputLabel>

                     <input style={{width:"240px", border: 'none','border-bottom': '2px solid #AAAAAA ' }} type="text"   onChange={(event)=>this.handleChange(event, "Title")} />
                    
            <br></br><br></br>
            <Button  type="submit">Ajouter</Button>
            
            <Button  onClick={()=>this.closeModal()}>Annuler</Button>
          </form>
        </Modal>
</view>        
        
        );
      }
    }
    
    export default withStyles( { withTheme: true })(Rubriques);