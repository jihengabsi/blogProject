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


class Dashboard extends React.Component  {
  
  componentDidMount() {
    axios.get(`http://localhost:3000/api/announces/`)
      .then(res => {
        const announces = res.data;
        this.setState({ announces });
      })
  }
  constructor() {
    super();
    this.state = {
    announces: [],
 
  
    }; 
      
  }
  render(){
    const { classes } = this.props;
  return (

      <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
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
        
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
          <CardHeader color="warning">
            <Chart
                width={'100%'}
                height={'100%'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Navigateur', 'Utilisateurs'],
                    ['Chrome', 706],
                    ['Firefox', 266],
                    ['Edge', 45],
                    ['Opera', 50],
                    ['Safari', 109],
                    ['Autres', 15]
                ]}
                
                rootProps={{ 'data-testid': '1' }}
                />
  
            </CardHeader>
            
            <CardBody>
              <h4 className={classes.cardTitle}>Navigateurs Utilisés</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 59%
                </span>{" "}
                utilisent Google Chrome.
              </p>
            </CardBody>
        
          </Card>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={6}>
          <Card>
          <CardHeader color="info">
            <Chart
                width={'100%'}
                height={'100%'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Mois', 'Articles ajoutés','Articles cachés'],
                    ['Janvier', 5 ,2],
                    ['Fevrier', 6,0],
                    ['Mars', 7,1],
                    ['Mai', 6,3],
                    ['Juin', 8,5],
                    ['Juillet', 5,1],
                    ['Aout', 0,0],
                    ['Septembre', 0,0],
                    ['Octobre', 0,0],
                    ['Novembre', 0,0],
                    ['Decembre', 0,0],
                ]}
                options={{
                    // Material design options
                    
                        chartArea: { width: '700%' },
                    
                }}
                // For tests
                rootProps={{ 'data-testid': '2' }}
                />
  
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
        <GridItem xs={12} sm={12} md={6}>
          <Card>
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
                   /* title: 'Population of Largest U.S. Cities',*/
                    chartArea: { width: '50%' },
                    hAxis: {
                    title: 'Articles',
                    minValue: 0,
                    },
                    vAxis: {
                    title: 'Admins',
                    },
                }}
                // For tests
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
            
          </Card>
        </GridItem>
        
      </GridContainer>
     
    </div>
     );
    }
}
export default withStyles(styles, { withTheme: true })(Dashboard);