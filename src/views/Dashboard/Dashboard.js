import React from "react";

// @material-ui/icons

import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios';
import Chart from "react-google-charts";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import {Redirect} from 'react-router-dom'

class Dashboard extends React.Component  {
  
  componentDidMount() {
    setInterval(()=>this.currentTime(),1000)
    axios.get(`http://localhost:3000/api/users/`)
    .then(res => {
      const users = res.data;
      var type=[0,0,0,0];
      users.forEach(element =>{
  if(element.body.type=="Client"||element.body.type=="client"){
    type[0]++;

  }
  else if(element.body.type=="Prospect"||element.body.type=="prospect"){
    type[1]++;
    
  }
  else{
    type[2]++;
  }
  type[3]++;

})   
  this.setState({type})
    })
    

    axios.get(`http://localhost:3000/api/announces/`)
      .then(res => {
        const announces = res.data;
        var month=[];
    for ( var i = 0; i < 12; i++){
      month.push({
          visib: 0,
          hidden: 0,
          total: 0
      })
  }
    
        announces.forEach(element =>{
          var tmp = new Date(element.body.date_cr);
          const today = new Date();
          const thisYear = today.getFullYear();
          console.log(tmp.getMonth());
          if(tmp.getFullYear()==thisYear)
          {if(element.body.visib){
           month[tmp.getMonth()].visib++;
         }
         else{
          month[tmp.getMonth()].hidden++;
         }
         month[tmp.getMonth()].total++;
        }
         });
         console.log(month);
        this.setState({ announces,month });
        
      })
  }
  
currentTime(){
  this.setState({
    time:new Date()
  })
}
  constructor() {
    const token=localStorage.getItem("token")

    let LoggedIn=true
  
    if(token==null){
        LoggedIn=false
    }
    var month=[];
    for ( var i = 0; i < 12; i++){
      month.push({
          visib: 0,
          hidden: 0,
          total: 0
      })
  }
    super();
    this.state = {
      LoggedIn,
      navigate:false,
      time:new Date(),
    announces: [],
   month:[],
   users:[],
   type:[]
  
    }; 
      
  }
  render(){
    const { classes } = this.props;
    const {navigate}=this.state;
    if(navigate){
      alert("Connectez vous s'il vous plais")
        return <Redirect to="/" push={true} />
    }
    
    if(this.state.LoggedIn===false){
      alert("Connectez vous s'il vous plais")
        return <Redirect to="/"/>
    }
       
  return (

      <div>
      <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
          <Card>
          <CardHeader color="info">
            <Chart
                width={'100%'}
                height={'100%'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
              
                data={[
                    ['Mois', 'Articles visibles','Articles cachés','Totale'],
                    ['Janvier', this.state.month.length > 0 ? this.state.month[0].visib : 0 ,this.state.month.length > 0 ? this.state.month[0].hidden : 0,this.state.month.length > 0 ? this.state.month[0].total : 0],
                    ['février', this.state.month.length > 0 ? this.state.month[1].visib : 0 ,this.state.month.length > 0 ? this.state.month[1].hidden : 0,this.state.month.length > 0 ? this.state.month[1].total : 0],
                    ['Mars', this.state.month.length > 0 ? this.state.month[2].visib : 0 ,this.state.month.length > 0 ? this.state.month[2].hidden : 0,this.state.month.length > 0 ? this.state.month[2].total : 0],
                    ['Avril', this.state.month.length > 0 ? this.state.month[3].visib : 0 ,this.state.month.length > 0 ? this.state.month[3].hidden : 0,this.state.month.length > 0 ? this.state.month[3].total : 0],
                    ['Mai', this.state.month.length > 0 ? this.state.month[4].visib : 0 ,this.state.month.length > 0 ? this.state.month[4].hidden : 0,this.state.month.length > 0 ? this.state.month[4].total : 0],
                    ['Juin', this.state.month.length > 0 ? this.state.month[5].visib : 0 ,this.state.month.length > 0 ? this.state.month[5].hidden : 0,this.state.month.length > 0 ? this.state.month[5].total : 0],
                    ['Juilet', this.state.month.length > 0 ? this.state.month[6].visib : 0 ,this.state.month.length > 0 ? this.state.month[6].hidden : 0,this.state.month.length > 0 ? this.state.month[6].total : 0],
                    ['Aout', this.state.month.length > 0 ? this.state.month[7].visib : 0 ,this.state.month.length > 0 ? this.state.month[7].hidden : 0,this.state.month.length > 0 ? this.state.month[7].total : 0],
                    ['Septembre', this.state.month.length > 0 ? this.state.month[8].visib : 0 ,this.state.month.length > 0 ? this.state.month[8].hidden : 0,this.state.month.length > 0 ? this.state.month[8].total : 0],
                    ['octobre', this.state.month.length > 0 ? this.state.month[9].visib : 0 ,this.state.month.length > 0 ? this.state.month[9].hidden : 0,this.state.month.length > 0 ? this.state.month[9].total : 0],
                    ['Novembre', this.state.month.length > 0 ? this.state.month[10].visib : 0 ,this.state.month.length > 0 ? this.state.month[10].hidden : 0,this.state.month.length > 0 ? this.state.month[10].total : 0],
                    ['Décembre', this.state.month.length > 0 ? this.state.month[11].visib : 0 ,this.state.month.length > 0 ? this.state.month[11].hidden : 0,this.state.month.length > 0 ? this.state.month[11].total : 0],

                ]}
          
                options={{
                    // Material design options
                    
                        chartArea: { width: '700%' },
                    
                }}
                // For tests
                rootProps={{ 'data-testid': '2' }}
                />
                      {/* {console.log(this.state.month[0].visib)} */}
  
            </CardHeader>
            
            <CardBody>
            
              <h4 className={classes.cardTitle}>Articles cette année</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> {this.state.announces.length}
                </span>{" "}
                articles au total.
              </p>
            </CardBody>
          
          </Card>
        </GridItem>
      <GridItem xs={12} sm={12} md={12}>
          <Card>
          <CardHeader color="warning">
            <Chart
                width={'100%'}
                height={'100%'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Type compte', 'Nombre'],
                    ['Client', this.state.type[0]],
                    ['Prospect', this.state.type[1]],
                    ['Autre', this.state.type[2]],
                    
                ]}
                
                rootProps={{ 'data-testid': '1' }}
                />
  
            </CardHeader>
            
            <CardBody>
              <h4 className={classes.cardTitle}>Comptes Crées</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> {this.state.type[3]}
                </span>{" "}
                ont crée des comptes.
              </p>
            </CardBody>
        
          </Card>
        </GridItem>
        {/* { data=this.state.month.map()} */}
       
        <GridItem xs={12} sm={12} md={6}>
          {/* <Card>
          <CardHeader color="success">
            <Chart
                width={'100%'}
                height={'100%'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                    [{ type: 'date', label: 'Day' },'views',],
                    [new Date(2020, 6, 14), 240],
                    [new Date(2020, 6, 15), 310],
                    [new Date(2020, 6, 16),326],
                    [new Date(2020, 6, 17),268],
                    [new Date(2020, 6, 18),409],
                    [new Date(2020, 6, 19),589],
                    [new Date(2020, 6, 20),287],
                  
                ]}
                options={{
                    hAxis: {
                    title: 'Jours',
                    format: 'd/M',
                    gridlines: {color: 'none'},
                    },
                    vAxis: {
                    title: 'Views',
                    
                    },
                }}
                rootProps={{ 'data-testid': '1' }}
                />
  
            </CardHeader>
            
            <CardBody>
         
              <h4 className={classes.cardTitle}>Vues cette semaine</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 347
                </span>{" "}
                vues par jour en moyenne.
              </p>
            </CardBody>
        
          </Card> */}
        </GridItem>
       
        <GridItem xs={12} sm={12} md={6}>
          {/* <Card>
          <CardHeader color="rose">
            <Chart
                width={'100%'}
                height={'100%'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Articles', 'ajoutés', 'cachés'],
                    ['Mr. Admin1', 12, 3],
                    ['Ms. Admin2', 10, 6],
                    ['Superadmin', 5, 2],
                    ['Mr. Admin3', 3, 1],
                ]}
                options={{
               
                    chartArea: { width: '50%' },
                    hAxis: {
                    title: 'Articles',
                    minValue: 0,
                    },
                    vAxis: {
                    title: 'Admins',
                    },
                }}
            
                rootProps={{ 'data-testid': '1' }}
                />
  
            </CardHeader>
            
            <CardBody>
              <h4 className={classes.cardTitle}>Articles ajoutés par chaque admin</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 12
                </span>{" "}
                articles ont été ajoutés par Mr. Admin1, le plus actif.
              </p>
            </CardBody>
            
          </Card> */}
        </GridItem>
        
      </GridContainer>
     
    </div>
     );
    }
}
export default withStyles(styles, { withTheme: true })(Dashboard);