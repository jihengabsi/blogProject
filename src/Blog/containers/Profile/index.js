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
import Table from "../../../components/Table/Table";
import avatar from "assets/img/faces/user-male.png";
import { NavLink } from "react-router-dom";
import Footer from '../../components/Footer';

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>

          <Card profile>
            <CardAvatar profile>
            
                <img src={avatar} alt="..." />
            </CardAvatar>
            <CardBody  style={{width:"400px",left: '37%',}} profile>
              <h4 className={classes.cardTitle}>Jihen Gabsi</h4>
              <p className={classes.description}>
              <center> <Table 
        
        tableData={[
          ["Date de naissance","11-10-1998"],
          ["Email", "Jihen@gmail.com"],
          ["N° de téléphone", "123456789"],
          ["Password", "*******"],

        ]}
      /></center>
              </p>
              <NavLink
  to="/blog/update"> <Button color="white" round>
                Modifier
              </Button></NavLink>
            </CardBody>
          </Card>
          <Footer></Footer>
    </div>
  );
}
