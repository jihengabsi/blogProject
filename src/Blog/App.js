  
import React from 'react';
import './App.css';
import Home from './containers/Home';

import Hero from './components/Hero';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContactUS from './containers/ContactUS';
import Post from './containers/Post';
import ListPosts from './components/listPosts';
import Login from './containers/Login';
import Sign from './containers/Signin';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserProfile from './containers/Profile/index';
import UpdateProfile from './containers/Profile/update';
import UpdatePwd from './containers/Profile/updatePwd';
import Reset from './components/Reset';

function App() {
  return (

    <Router>
      <div >
        <Hero />
        
        <Route path="/blog" exact component={Home} />
        <Route path="/blog/contact-us"  component={ContactUS}/>
        <Route path="/blog/reset" component={Reset} />
        <Route path="/post/:slug" component={Post} />
        <Route path="/blog/listPosts" component={ListPosts} />
        <Route path="/blog/login" component={Login} />
        <Route path="/blog/profile" component={UserProfile} />
        <Route path="/blog/update" component={UpdateProfile} />
        <Route path="/blog/updatePwd" component={UpdatePwd} />
        <Route path="/blog/signup" component={Sign} />
      </div>
    </Router>
    
  );
}

export default App;