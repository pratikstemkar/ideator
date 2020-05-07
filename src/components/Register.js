import React, {Fragment, Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../firebase';
import cogoToast from 'cogo-toast';


const Register = () => {
    return(
        <Fragment>
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <h1>Register</h1>
                    </div>
                    <div className="col-4">
                        <Form />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

const INITIAL_STATE = {
    username: '',
    email: '',
    pass1: '',
    pass2: '',
    error: null
};

class RForm extends Component {
    constructor(props){
        super(props);

        this.state = { ...INITIAL_STATE};

        
    }
// eslint-disable-next-line
    onSubmit = event => {
        const {username, email, pass1} = this.state;
        
        cogoToast.loading('Registering you ...').then(() => {
            this.props.firebase
                .doCreateUserWithEmailAndPassword(email, pass1)
                .then(authUser => {
                    this.setState({ ...INITIAL_STATE });

                    cogoToast.success('Registered Successfully');
                    this.props.history.push('/home');
                })
                .catch(error => {
                    this.setState({ error });
                    cogoToast.error(error.message);
                });
        });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render(){
        const {
            username,
            email,
            pass1,
            pass2,
            error
        } = this.state;

        const isInvalid =
            pass1 !== pass2 ||
            pass1 === '' ||
            email === '' ||
            username === '';

        return(
            <form onSubmit={this.onSubmit}>
                <legend>Register</legend>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" name="username" value={username} onChange={this.onChange} placeholder="Username" />
                    <small id="userHelp" className="form-text text-muted">Username should be lowercase.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" value={email} onChange={this.onChange} placeholder="Email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="pass1">Password</label>
                    <input type="password" className="form-control" id="pass1" name="pass1" value={pass1} onChange={this.onChange} placeholder="Enter Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="pass2">Confirm Password</label>
                    <input type="password" className="form-control" id="pass2" name="pass2" value={pass2} onChange={this.onChange} placeholder="Confirm Password" />
                </div>
                <button type="submit" disabled={isInvalid} className="btn btn-primary mt-2">Register</button>
                <p className="text-muted"><small>Already have an account? <Link to="/login">Login</Link></small></p>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const Form = compose(
    withRouter,
    withFirebase,
    )(RForm);

export default Register;