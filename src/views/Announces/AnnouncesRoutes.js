import React from "react";
// @material-ui/core components
// core components

import './style.css';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Image from "./PVC-Expomoda-0005-Dark-Grey.jpg";
import Button from "components/CustomButtons/Button.js";
import { Link,NavLink,Switch,Route } from 'react-router-dom';
import ModifyAnnounce from "views/Announces/ModifyAnnounce.js";
import ListAnnounce from "views/Announces/ListAnnounces.js";
export default function ListAnnounces() {
  
    return (   
       <view>
    <Switch>
    <Route path="/">
        <ListAnnounce/>
           </Route>
    </Switch>
    </view>
        
        );
    }h
    
 