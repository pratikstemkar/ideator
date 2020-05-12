import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Landing from './components/Landing'
import Contact from './components/Contact'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PassChange from './components/PassChange';
import PassForget from './components/PassForget';
import EditProfile from './components/EditProfile';
import Home from './components/Home';
import Notifications from './components/Notifications';

import { withAuthentication } from './session';

const App = () =>  {
  return(
    <Router>
      <div>

        <Navbar />

        <Route exact path="/" component={Landing} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/password-reset" component={PassForget} />
        <Route path="/password-change" component={PassChange} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/:username/edit-profile" component={EditProfile} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/user/:username" component={Profile} />
      </div>

      <Footer />

    </Router>
  );
}

export default withAuthentication(App);
