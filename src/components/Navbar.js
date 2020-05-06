import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import AuthUserContext from '../session/Context';

const Navbar = () => {
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Ideator</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    </ul>
                    <ul className="navbar-nav mr-0">
                        <AuthUserContext.Consumer>
                            {authUser => 
                                authUser ? <NavAuth /> : <NavNotAuth />
                            }
                        </AuthUserContext.Consumer>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
}

const NavAuth = () => {
    return(
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
                <Logout />
            </li>
        </Fragment>
    );
}

const NavNotAuth = () => {
    return(
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
        </Fragment>
    );
}

export default Navbar;