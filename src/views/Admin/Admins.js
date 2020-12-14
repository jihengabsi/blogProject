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

export default function Admins() {
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
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000';
  }
 
  function closeModal(){
    setIsOpen(false);
  }
  return (   
     <view>
    
     <Card className="Card"> 
  <CardBody>
  <Grid fluid>
    <Row>
    <Col xs className="col1">
<h4 >List of admins <Button   onClick={openModal} color="white"><AddIcon name="add"></AddIcon>Add</Button></h4>

   </Col>
  
    </Row>
    <Row>
   
    </Row>
    <Row>
    <Table
              tableHeaderColor="gray"
              tableHead={["Name", "Email", "Assigned", "Actions"]}
              tableData={[
                ["Jihen Gabsi", "Jihen@gmail.com", "11-10-2020", <Button color="danger">Delete</Button>],
                ["AAAA", "AAAA@gmail.com", "11-11-2020", <Button color="danger">Delete</Button>]
                
              ]}
            />
    </Row>
    </Grid>
 
  </CardBody>
  
</Card>
<Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <form>
            
         
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Add a new admin</h2>
  
          <CustomInput
                    labelText="Name"
                    id="about-me"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 1,
                    }}
                  />
                      
          <CustomInput
                    labelText="Email"
                    id="about-me"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 1,
                    }}
                  />

           
            <br></br>
            <Button>Add</Button>
            
            <Button onClick={closeModal}>close</Button>
          </form>
        </Modal>
</view>        
        
  );
}
