import React from 'react';
import Button from "components/CustomButtons/Button.js";

import axios from 'axios';


class HideControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleHideClick = this.handleHideClick.bind(this);
      this.handleUnhideClick = this.handleUnhideClick.bind(this);
      this.state = {isHidden: false};
      
    }
 
    handleHideClick= event => {
      this.setState({isHidden: true});
      {alert("L'article n'est plus visible.")}
      event.preventDefault();
  
      axios.put(`http://localhost:3001/api/announces/put/visib`, { visib: true })
        .then(res => {
          const announces = res.data;
          this.setState({ announces });
          alert("success!!");
        }).catch(error=>{
          console.log(error.message);
          alert("fail!!");
        })
      
    }
  
    handleUnhideClick() {
      this.setState({isHidden: false});
      {alert("L'article est maintenant visible.")}
    }
  
    render() {
      const isHidden = this.state.isHidden;
      let button;
  
      if (isHidden) {
        button = <UnhideButton onClick={this.handleUnhideClick} />;
      } else {
        button = <HideButton onClick={this.handleHideClick} />;
      }
  
      return (
        <div>
          {button}
        </div>
      );
    }
  }
  
  
  
  function HideButton(props) {
    return (

        <Button   style={{ width: '100%' }}  onClick={props.onClick} type="button" color="warning">Hide</Button>
    );
  }
  
  function UnhideButton(props) {
    return (
        <Button style={{ width: '100%' }}  onClick={props.onClick} type="button" color= "danger">Unhide</Button>
    );
  }
  

  export default HideControl