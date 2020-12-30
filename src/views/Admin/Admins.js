import React from "react";
// @material-ui/core components
// core components


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
      alert("success!!");
      window.location = "/admin/Admin's";
     
    }).catch(error=>{
      console.log(error.message);
      alert("fail!!");
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
    Login:"",
    Email:"",
    Role:"",
    Password:"",
    PhoneNumber:""
  
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
    
     <Card className="Card"> 
  <CardBody>
  <Grid fluid>
    <Row>
    <Col  xs >
<h4 >List of admins <Button   onClick={()=>this.openModal()} color="white"><AddIcon name="add"></AddIcon>Add</Button></h4>

   </Col>
  
    </Row>
    <Row>
   
    </Row>
    <Row>
    <Table
              tableHeaderColor="gray"
              tableHead={["Login", "Email", "Phone Number","Actions"]}
              tableData={this.state.admins.map(admin =>[
        
               admin.body.login,admin.body.mail, admin.body.phoneNumber ,<Button color="danger">Delete</Button>
                
                ,
               
               
              ]
              )}
              
            />
    </Row>
    </Grid>
 
  </CardBody>
  
</Card>
<Modal isOpen={this.state.modalIsOpen}
            onRequestClose={() => {this.closeModal()} }
            style={customStyles}
            contentLabel="Example Modal"
        >
 
 <form onSubmit={this.handleSubmit}>          
         
          <h2 >Add a new admin</h2>
     
          <br></br>
                <InputLabel style={{ color: "#AAAAAA" }}>Login</InputLabel>

                     <input style={{width:"240px", border: 'none','border-bottom': '2px solid #AAAAAA ' }} type="text"   onChange={(event)=>this.handleChange(event, "Login")} />
                     <InputLabel style={{ color: "#AAAAAA" }}>Email</InputLabel>

<input style={{width:"240px", border: 'none','border-bottom': '2px solid #AAAAAA ' }} type="Email"   onChange={(event)=>this.handleChange(event, "Email")} />
<InputLabel style={{ color: "#AAAAAA" }}>Role</InputLabel>

<input style={{width:"240px", border: 'none','border-bottom': '2px solid #AAAAAA ' }} type="text"   onChange={(event)=>this.handleChange(event, "Role")} />
<InputLabel style={{ color: "#AAAAAA" }}>Password</InputLabel>

<input style={{width:"240px", border: 'none','border-bottom': '2px solid #AAAAAA ' }} type="password"   onChange={(event)=>this.handleChange(event, "Password")} />
<InputLabel style={{ color: "#AAAAAA" }}>Phone Number</InputLabel>

<input style={{width:"240px", border: 'none','border-bottom': '2px solid #AAAAAA ' }} type="text"   onChange={(event)=>this.handleChange(event, "PhoneNumber")} />
           
            <br></br>
            <Button  type="submit">Add</Button>
            
            <Button  onClick={()=>this.closeModal()}>close</Button>
          </form>
        </Modal>
</view>        
        
        );
      }
    }
    
    export default withStyles( { withTheme: true })(Admins);