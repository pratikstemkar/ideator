import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Landing from './components/Layout/Landing'
import Contact from './components/Layout/Contact'
import About from './components/Layout/About'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Profile from './components/Profile/Profile'
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import PassChange from './components/Auth/PassChange';
import PassForget from './components/Auth/PassForget';
import EditProfile from './components/Profile/EditProfile';
import Home from './components/Main/Home';
import Notifications from './components/Main/Notifications';

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
