import React, {Fragment, Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../firebase';
import cogoToast from 'cogo-toast';
import Google from './SignInGoogle';


const Login = () => {
    return(
        <Fragment>
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <h1>Login</h1>
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
    email: '',
    pass: '',
    error: null
};

class LForm extends Component {
    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE};
    }

    onSubmit = event => {
        const { email, pass } = this.state;
        
        cogoToast.loading('Logging In ...').then(() => {
            this.props.firebase
                .doSignInWithEmailAndPassword(email, pass)
                .then(() => {
                    this.setState({ ...INITIAL_STATE });

                    cogoToast.success('Logged In Successfully');
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
            email,
            pass,
        } = this.state;

        const isInvalid =
            pass === '' ||
            email === '' ;

        return(
            <Fragment>
                <form onSubmit={this.onSubmit}>
                <legend>Login</legend>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" value={email} onChange={this.onChange} placeholder="Email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="pass">Password</label>
                    <input type="password" className="form-control" id="pass" name="pass" value={pass} onChange={this.onChange} placeholder="Enter Password" />
                    <small id="passForget" className="form-text text-muted"><Link to='/password-reset'>Forgot Password?</Link></small>
                </div>
                <button type="submit" disabled={isInvalid} className="btn btn-primary mt-2">Login</button>
                <p className="text-muted"><small>Don't have an account? <Link to="/register">Register</Link></small></p>
                </form>
                <Google />
            </Fragment>
        );
    }
}

const Form = compose(
    withRouter,
    withFirebase,
    )(LForm);

export default Login;