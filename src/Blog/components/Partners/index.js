import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './style.css'
import Typography from '@material-ui/core/Typography';
import logo from '../../../assets/img/oms.png'
import logo2 from '../../../assets/img/ministry.jpg'
import logo3 from '../../../assets/img/tunac.png'
import logo4 from '../../../assets/img/esprit.jpg'
import logo5 from '../../../assets/img/eu.png'
import logo6 from '../../../assets/img/cnam.jpg'
import logo7 from '../../../assets/img/cnopt.jpg'
import { Button } from 'reactstrap'

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



class Partner extends Component {
  constructor(props) {

    super(props);
    this.handleAll = this.handleAll.bind(this);
    this.handleNationaux = this.handleNationaux.bind(this);
    this.handleInterNationaux = this.handleInterNationaux.bind(this);
    this.changeHeight = this.changeHeight.bind(this);

    this.state = { number: 1 , filter: false};

  }

  handleAll = event => {
    this.setState({ number: 1 });
  }
  handleNationaux = event => {
    this.setState({ number: 2 });
  }
  handleInterNationaux = event => {
    this.setState({ number: 3 });
  }
  changeHeight = event => {
    if (this.state.filter){
      this.setState({ filter: false });
    } else {
      this.setState({ filter: true });
    }
  }



  render() {
    const { classes } = this.props;
    const number = this.state.number;
    const filter = this.state.filter;
    let button;
    let height;

    if (filter){        /* Filter is on */ 
      height="50px";
    } else {            /* Filter is off */
      height="0";
    }


    if (number == 1) { /*  "Tous" is checked    */ 
      button = <div>
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
              <Card style={{ height: "100" }} className={classes.card}>
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
              <Card style={{ height: "100" }} className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={logo5}
                    title="Union Européenne"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                      Union Européenne
                          </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                      <a href="https://europa.eu/">www.europa.eu</a>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card style={{ height: "100" }} className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={logo7}
                    title="CNOPT"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                      Conseil National de l'Ordre des Pharmaciens de Tunisie
                          </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                      <a href="https://cnopt.tn/">www.cnopt.tn</a>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card style={{ height: "100" }} className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={logo6}
                    title="CNAM"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                      Caisse Nationale d'Assurance Maladie
                          </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                      <a href="https://cnam.nat.tn/">www.cnam.nat.tn</a>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>

        </div>
      </div>;
    }


    else if (number == 2) {  /*  "Nationaux" is checked    */ 
      button = <div>
        <div className={classes.root}>
          <Grid container spacing={3}>

            


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
              <Card style={{ height: "100" }} className={classes.card}>
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
              <Card style={{ height: "100" }} className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={logo7}
                    title="CNOPT"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                      Conseil National de l'Ordre des Pharmaciens de Tunisie
                              </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                      <a href="https://cnopt.tn/">www.cnopt.tn</a>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card style={{ height: "100" }} className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={logo6}
                    title="CNAM"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                      Caisse Nationale d'Assurance Maladie
                              </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                      <a href="https://cnam.nat.tn/">www.cnam.nat.tn</a>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>

        </div>
      </div>;
    }




    else {    /* "Internationaux" is checked */
      button = <div>
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
              <Card style={{ height: "100" }} className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={logo5}
                    title="Union Européenne"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                      Union Européenne
                          </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                      <a href="https://europa.eu/">www.europa.eu</a>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            
            
          </Grid>

        </div>
      </div>;
    }

    return (
      <div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div className="thetop">
          <h1 style={{ display: "flex", alignItems: "center" }}> <span>Nos Partenaires : </span>
            <div className="FilterButton" >
              <Button style={{ width: "100%" }} onClick={this.changeHeight} color="danger">Filtre</Button>
            </div>
          </h1>
          {/* Height of filter changes with function call */}
          <div className="tunis" style={{height:height}}> 
          
            <input type="radio" id="test1" name="radio-group" checked={this.state.number == 1} onChange={this.handleAll} />
            <label htmlFor="test1">Tous</label>

            <input type="radio" id="test2" name="radio-group" checked={this.state.number == 2} onChange={this.handleNationaux} />
            <label htmlFor="test2">Nationaux</label>

            <input type="radio" id="test3" name="radio-group" checked={this.state.number == 3} onChange={this.handleInterNationaux} />
            <label htmlFor="test3">Internationaux</label>

          </div>
        </div>
        {button}

      </div>
    );
  }
}



export default withStyles(styles)(Partner)