import React, { Fragment, Component } from 'react';
import cogoToast from 'cogo-toast';

import { withRouter } from 'react-router-dom';
import { withFirebase } from '../firebase';

import {compose} from 'recompose';

class SignInGoogle extends Component {
    constructor(props){
        super(props);

        this.setState({ error: null });
    }

    onSubmit = event => {
        cogoToast.loading('Signing In with Google').then(() => {
            this.props.firebase
                .doSignInWithGoogle()
                .then(socialAuthUser => {
                    this.setState({ error: null });
                    
                    cogoToast.success('Signed In with Google');
                    this.props.history.push('/home');
                })
                .catch(error => {
                    this.setState({ error });
                    cogoToast.error(error.message);
                });
        });
  
        event.preventDefault();
    };

    render(){
        return(
            <Fragment>
                <form onSubmit={this.onSubmit}>
                    <button className="btn btn-outline-danger" type="submit">
                        Sign In with Google
                    </button>
                </form>
            </Fragment>
        );
    }
}

const Google = compose(
    withRouter,
    withFirebase,
)(SignInGoogle);

export default Google;