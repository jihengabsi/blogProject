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

export default function UpdateProfile() {
  const classes = useStyles();
  return (
    <div style={{width:"80%",right: '37%',}}>
  
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card style={{width:"100%",left: '50%',}}>
            <CardHeader color="white">
              <h4 className={classes.cardTitleBlack}>Modifier le profile</h4>
            </CardHeader>
            <CardBody>
   
              <div className="form-group">
                    <label>
Prénom
</label>
                    <input type="text" className="form-control" placeholder="Prénom" />
                </div>

                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" className="form-control" placeholder="Nom" />
                </div>

                <div className="form-group">
                    <label>Date de naissance</label>
                    <input type="date" className="form-control" placeholder="" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email" />
                </div>

                <div className="form-group">
                    <label>N° de téléphone</label>
                    <input type="text" className="form-control" placeholder="N° de téléphone" />
                </div>

                <div className="form-group">
                    <label>Mot de passe</label>
                    <input type="password" className="form-control" placeholder="Mot de passe" />
                </div>
                  <br></br>
                  <InputLabel style={{ color: "#AAAAAA" }}>Choisir une image</InputLabel>
                  <br></br>
                   <input type="file" name="image"/>
    
              </CardBody>
           
            <CardFooter>
              <Button color="white">Modifier le profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
    
      </GridContainer>
      
    </div>

  );
}
