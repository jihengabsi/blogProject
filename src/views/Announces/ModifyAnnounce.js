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
import axios from 'axios';
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

class ModifyAnnounce extends React.Component {
  componentDidMount() {
    axios.get(`http://localhost:3000/api/announces/${this.props.message}`)
      .then(res => {
        const announces = res.data;
        this.setState({ announces });
      })
  }
  constructor() {
    super();
    this.state = {
    announces: [],
    Title: '',
    Description: '',
    Image: 'test'
  
     
    }; 
      
  }
  handleChange (evt, field) {
    this.setState({ [field]: evt.target.value });
  
  }
  
  handleSubmit = event => {
    event.preventDefault();
  
    const announce = {
      id:this.props.message,
      titre:this.state.Title,
      description: this.state.Description,
      image: "test",
      token:"eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4MGU0NWJlNGIzMTE4MzA5M2RhNzUyYmIyZGU5Y2RjYTNlNmU4ZTciLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoibW9kZXJhdG9yIiwiaWQiOiJKQlBHNXJ3YUtxZnR0VGpyYmZjcCIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9taW5pLXByb2plY3QtaW5jcCIsImF1ZCI6Im1pbmktcHJvamVjdC1pbmNwIiwiYXV0aF90aW1lIjoxNjA5MTg2NDIzLCJ1c2VyX2lkIjoiZXZ6bE5TancyUlVYNUR6cGlFUG05ZTBubTRRMiIsInN1YiI6ImV2emxOU2p3MlJVWDVEenBpRVBtOWUwbm00UTIiLCJpYXQiOjE2MDkxODY0MjYsImV4cCI6MTYwOTE5MDAyNiwiZW1haWwiOiJ5Lmtvc3NvbnRpbmlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsieS5rb3Nzb250aW5pQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qJPGVc8U4nj0EXLfYBqwEBY7OGI--eQ_kGjDU9k5sbHdCwo9Tw2VUNOChoC24MOJBdKza3zIWjhyLba58GZohWWdLL0XkIVWzLm3xLQBF74hTC9LGJvsxYvME8qJMljLlpjoELsh-MNo3XG1_a_RK93xo28XmNZ2qRcqZnm65yWORUoIcXd4AvKRPlCCy06Iyu3KLaCHvQiyDoVeI1GXRXuy8sCdMZM4xOU3HB43DPJnp8mOUz3Kvint0jnBYcTN6VrmCwTqQKgwIxbcsBpEAyTouzS56mCKLnoWHylcHEdkV_SKTCKwZj8qAfuwHYwgRwdRDa2bic6FPYbzZs8ZvA"      
  
    };

    axios.put(`http://localhost:3000/api/announces/put`, announce)
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert(announce.id);
        window.location = "/admin/list";
       
      }).catch(error=>{
        console.log(error.message);
        alert("fail!!");
      })
  }
  render(){
    const { classes } = this.props;
    
  return (

    <div >
    
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
     
          <Card>
          <form onSubmit={this.handleSubmit}>
            <CardHeader color="danger">
              
              <h4 className={classes.cardTitleWhite}>Modify an announce</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <br></br>
                <InputLabel style={{ color: "#AAAAAA" }}>Title</InputLabel>
                <br></br>
                <input style={{width:"240px", border: 'none','border-bottom': '2px solid #AAAAAA ' }} placeholder={this.state.announces.map(announce =>announce.body.titre)}type="text"   onChange={(event)=>this.handleChange(event, "Title")} />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                <br></br>
                <InputLabel style={{ color: "#AAAAAA" }}>Description</InputLabel>
                <textarea type="text" placeholder={this.state.announces.map(announce =>announce.body.description)}style={{width:"240px", border: 'none','border-bottom': '2px solid #AAAAAA ',  'height': '80px',"box-sizing": "border-box",  'resize': 'vertical'}}    onChange={(event)=>this.handleChange(event, "Description")} />
                </GridItem>
              </GridContainer>

            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <br></br>
                  <InputLabel style={{ color: "#AAAAAA" }}>Upload image</InputLabel>
                  <br></br>
                   <input type="file" name="image"/>
                </GridItem>
              </GridContainer>
              </CardBody>
           
            <CardFooter>
              <Button type="submit" color="danger">Modify announce</Button>
            </CardFooter>
            </form>
          </Card>
    
        </GridItem>
    
      </GridContainer>

    </div>
       
       );
      }
    }
    
    export default withStyles(styles, { withTheme: true })(ModifyAnnounce);