import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";
import Chart from "react-google-charts";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
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
                   /* [new Date(2020, 3), 2.9],
                    [new Date(2020, 4), 6.3],
                    [new Date(2020, 5), 9],
                    [new Date(2020, 6), 10.6],
                    [new Date(2020, 7), 10.3],
                    [new Date(2020, 8), 7.4],
                    [new Date(2020, 9), 4.4],
                    [new Date(2020, 10), 1.1],
                    [new Date(2020, 11), -0.2],*/
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
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
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
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 37 minutes ago
              </div>
            </CardFooter>
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
                  <ArrowUpward className={classes.upArrowCardCategory} /> 37
                </span>{" "}
                articles au total.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 2 days ago
              </div>
            </CardFooter>
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
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        
      </GridContainer>
     
    </div>
  );
}
