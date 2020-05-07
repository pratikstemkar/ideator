import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import { withAuthorization, AuthUserContext } from '../session';

import Post from './Post';

const Profile = () => {
    return(
        <Fragment>
            <AuthUserContext.Consumer>
                {authUser => (
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-sm-3">
                                <img src={authUser.photoURL} class="profile-page-image rounded-circle shadow bg-white rounded" alt=""/>
                            </div>
                            <div className="col-3">
                                <div className="name-detail">
                                    <span className="pro-fullname">{authUser.displayName} <sup><Link to="/notifications" className="badge badge-danger">2</Link></sup></span>
                                    <br/>
                                    <span className="pro-username">{authUser.uid}</span>
                                    <br/>
                                    <a href={'mailto:' + authUser.email}>{authUser.email}</a>
                                    <br/>
                                    <div className="mt-2">
                                        <a className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer" href={'https://twitter.com/' + 'pratikstemkar'}>Twitter</a>
                                        <a className="btn btn-outline-info ml-2" target="_blank" rel="noopener noreferrer" href={'https://linkedin.com/in/' + 'pratikstemkar'}>LinkedIn</a>
                                        <a className="btn btn-outline-danger ml-2" target="_blank" rel="noopener noreferrer" href={'https://instagram.com/' + 'pratikstemkar'}>Instagram</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                            <Link className="btn btn-secondary float-right" to="/edit-profile">Edit Profile</Link>
                                
                                <div className="pro-fol">
                                    <span className="pro-followers">141 Followers</span>
                                    <span className="pro-following ml-4">422 Following</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </AuthUserContext.Consumer>

            <div className="container mt-4">
                    <div className="row">
                        <div className="col">
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                        </div>
                        <div className="col-md-3">
                            <hr/>
                            <h1>Suggestion</h1>
                        </div>
                    </div>
            </div>
        </Fragment>
    );
}

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Profile);