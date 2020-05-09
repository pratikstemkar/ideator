import React, {Fragment} from 'react';

import {withAuthorization, AuthUserContext} from '../session';

const INITIAL_STATE = {
    fullname: '',
    username: '',
    email: '',
    twitter: '',
    linkedin: '',
    instagram: '',
    error: null
};

class EditProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render(){
        const {
            fullname,
            username,
            email,
            twitter,
            linkedin,
            instagram,
            error
        } = this.state;

        const inValid = 
            fullname === '' &&
            username === '' &&
            email === '' &&
            twitter === '' &&
            linkedin === '' &&
            instagram === ''; 

        return(
            <Fragment>
                <AuthUserContext.Consumer>
                    {authUser => (
                        <div className="container mt-4">
                            <h1>Edit Profile</h1>
                            <div className="row mt-4">
                                <div className="col-sm-1">
                                    
                                    <img src={authUser.photoURL} className="edit-pro-image rounded-circle" alt="edit-profile-image"/>
                                </div>
                                <div className="edit-detail col-4">
                                    <form>
                                        <div className="input-group">
                                            <input type="text" name="fullname" value={fullname} onChange={this.onChange} placeholder={authUser.displayName} className="form-control"/>
                                        </div>
                                        <div className="input-group mt-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">@</div>
                                            </div>
                                            <input type="text" name="username" value={username} onChange={this.onChange} placeholder={authUser.uid} className="form-control"/>
                                        </div>
                                        <div className="input-group mt-2">
                                            <input type="text" name="email" value={email} onChange={this.onChange} placeholder={authUser.email} className="form-control"/>
                                        </div>
                                        <div className="input-group mt-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">@twitter</div>
                                            </div>
                                            <input type="text" name="twitter" value={twitter} onChange={this.onChange} placeholder={authUser.displayName} className="form-control"/>
                                        </div>
                                        <div className="input-group mt-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">@linkedin</div>
                                            </div>
                                            <input type="text" name="linkedin" value={linkedin} onChange={this.onChange} placeholder={authUser.displayName} className="form-control"/>
                                        </div>
                                        <div className="input-group mt-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">@instagram</div>
                                            </div>
                                            <input type="text" name="instagram" value={instagram} onChange={this.onChange} placeholder={authUser.displayName} className="form-control"/>
                                        </div>
                                        <button type="submit" disabled={inValid} className="btn btn-success float-right mt-2">Save Changes</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </AuthUserContext.Consumer>
            </Fragment>
        );
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(EditProfile);