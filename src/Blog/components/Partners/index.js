import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from '../../../assets/img/oms.png'
import logo2 from '../../../assets/img/ministry.jpg'
import logo3 from '../../../assets/img/tunac.png'
import logo4 from '../../../assets/img/esprit.jpg'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    card: {
        maxWidth: 345,
        height: "100%",
      },
    media: {
        height: 250,
      },
  });



 class Partner extends Component{
    

  render(){
    const {classes} = this.props;
  return (
    <div>

       <h1> Nos Partenaires : </h1>
    <div className={classes.root}>
      <Grid container spacing={3}>
          
        <Grid item xs={3}>
                  <Card className={classes.card}>
                      <CardActionArea>
                          <CardMedia
                              className={classes.media}
                              image={logo}
                              title="OMS"
                          />
                          <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                  Organisation Mondiale de la Santé
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <a href="https://www.who.int/fr">www.who.int</a>
                              </Typography>
                          </CardContent>
                      </CardActionArea>
                  </Card>
        </Grid>


        <Grid item xs={3}>
        <Card className={classes.card}>
                      <CardActionArea>
                          <CardMedia
                              className={classes.media}
                              image={logo2}
                              title="MSP"
                          />
                          <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                  Minsitère de la Santé Publique
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <a href="http://www.santetunisie.rns.tn/">www.santetunisie.rns.tn</a>
                              </Typography>
                          </CardContent>
                            
                      </CardActionArea>
                  </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
                      <CardActionArea>
                          <CardMedia
                              className={classes.media}
                              image={logo3}
                              title="TUNAC"
                          />
                          <CardContent>
                              <Typography gutterBottom variant="h6" component="h3">
                              Le Conseil National d'Accréditation TUNAC
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <a href="http://www.tunac.tn/">www.tunac.tn</a>
                              </Typography>
                          </CardContent>
                      </CardActionArea>
                  </Card>
        </Grid>
        <Grid item xs={3}>
                    <Card style={{height:"100"}} className={classes.card}>
                      <CardActionArea>
                          <CardMedia
                              className={classes.media}
                              image={logo4}
                              title="Esprit"
                          />
                          <CardContent>
                              <Typography gutterBottom variant="h5" component="h3">
                              ESPRIT
                              </Typography>
                              
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <a href="https://esprit.tn/">www.esprit.tn</a>
                              </Typography>
                          </CardContent>
                      </CardActionArea>
                  </Card>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
      
    </div>
    </div>
  );
}
}
export default withStyles(styles)(Partner)