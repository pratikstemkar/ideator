import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
 
import  AuthUserContext  from './Context';

import { withFirebase } from '../firebase';
import cogoToast from 'cogo-toast';
 
const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          if (!condition(authUser)) {
            cogoToast.error('Log In to access the pages.');
            this.props.history.push('/login');
          }
        },
      );
    }
 
    componentWillUnmount() {
      this.listener();
    }
 
    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            condition(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  }
 
  return compose(
    withRouter,
    withFirebase,
  )(WithAuthorization);
};
 
export default withAuthorization;