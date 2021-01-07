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
import { withStyles } from "@material-ui/core/styles";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import EditIcon from '@material-ui/icons/Edit';
import axios from "axios";
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



 class UserProfile extends React.Component   {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
        id: localStorage.getItem('ID')
    };
      
  }
  componentDidMount() {
    
    axios.get(`http://localhost:3000/api/users/${this.state.id}`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }
  
  render(){
    const { classes } = this.props;
  return (
   
    <div style={{paddingTop:"110px"}}>

          <Card style={{width:"400px",left: '37%',}}  profile>
            <CardAvatar profile>
            
                <img src={this.state.users.map(user=>user.body.image)} alt="..." />
            </CardAvatar>
            <CardBody  profile>
              <h4 className={classes.cardTitle}>{this.state.users.map(user=>user.body.name)} {this.state.users.map(user=>user.body.surname)} <NavLink
  to="/blog/update"> <EditIcon/></NavLink></h4>
              <p className={classes.description}>
              <center> <Table 
        
        tableData={[
          ["Email", this.state.users.map(user=>user.body.email), ""  ],
          ["N° de téléphone", this.state.users.map(user=>user.body.phoneNumber), "" ],
          ["Password","*****",<NavLink
          to="/blog/updatePwd"> <ChevronRightIcon/></NavLink>],

        ]}
      /></center>
              </p>
             
            </CardBody>
          </Card>
          <Footer></Footer>
    </div>
)
}
}

export default withStyles(styles, { withTheme: true })(UserProfile);