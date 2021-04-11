import React from 'react';
import Button from "components/CustomButtons/Button.js";
import axios from 'axios';

class HideControl extends React.Component {
    constructor(props) {
      
      super(props);
      this.handleHideClick = this.handleHideClick.bind(this);
      this.handleUnhideClick = this.handleUnhideClick.bind(this);

      this.state = {isHidden: this.props.message2};
     
    }
 
    handleHideClick= event => {
      this.setState({isHidden: true});
      {
        alert("L'article n'est plus visible."+localStorage.getItem('token'))
      }
      event.preventDefault();

      const announce = {
        visib:false,
        token:localStorage.getItem('token'),
        id:this.props.message,
      };
      axios.put(`http://localhost:3000/api/announces/put/visib/`, announce)
        .then(res => {
          console.log(res);
          console.log(res.data);
          window.location = "/admin/list";
        }).catch(error=>{
          console.log(error.message);
          alert("fail!!");
        })
      
    }
  
    handleUnhideClick= event => {
      this.setState({isHidden: false});
      {alert("L'article est maintenant visible.")}
      event.preventDefault();
      const announce = {
        visib:true,
        token:localStorage.getItem('token'),
        id:this.props.message,
     
      };
      axios.put(`http://localhost:3000/api/announces/put/visib/`, announce)
        .then(res => {
          console.log(res);
          console.log(res.data);
          window.location = "/admin/list";
        }).catch(error=>{
          console.log(error.message);
          alert("fail!!");
        })
      
    }
  
    render() {
      const isHidden = this.state.isHidden;
      let button;
  
      if (isHidden) {
        button = <HideButton onClick={this.handleHideClick} />;
      } else {
        button = <UnhideButton onClick={this.handleUnhideClick} />;
       
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

        <Button   style={{ width: '100%' }}  onClick={props.onClick} type="button" color="warning">Cacher</Button>
    );
  }
  
  function UnhideButton(props) {
    return (
        <Button style={{ width: '100%' }}  onClick={props.onClick} type="button" color= "danger">Afficher</Button>
    );
  }
  

  export default HideControl