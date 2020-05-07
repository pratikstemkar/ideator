import React, { Component, Fragment } from 'react';

import { withFirebase } from '../firebase';
import cogoToast from 'cogo-toast';

const PassForget = () => {
    return(
        <Fragment>
            <Form />
        </Fragment>
    );
}

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PFForm extends Component {
    constructor(props){
        super(props);

        this.state = { ...INITIAL_STATE};
    }

    onSubmit = event => {
        const { email } = this.state;

        cogoToast.loading('Sending Email ...').then(() => {
            this.props.firebase
                .doPasswordReset(email)
                .then(() => {
                    this.setState({ ...INITIAL_STATE});
                    cogoToast.success('Password Reset Email Sent Successfully');
                })
                .catch(error => {
                    this.setState({ error });
                    cogoToast.error(error.message);
                });
        });

        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { email } = this.state;
     
        const isInvalid = email === '';
     
        return (
          <Fragment>
            <form onSubmit={this.onSubmit} className="centered mt-2">
                <legend>Password Reset</legend>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" value={email} onChange={this.onChange} placeholder="Email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button type="submit" disabled={isInvalid} className="btn btn-primary mt-2">Reset Password</button>
            </form>
          </Fragment>
        );
    }
}

const Form = withFirebase(PFForm);

export default PassForget;