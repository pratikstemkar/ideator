import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {withAuthorization, withAuthentication} from '../../session';
import { withFirebase } from '../../firebase';
import { compose } from 'recompose';

import cogoToast from 'cogo-toast';

class Edit extends React.Component {
    

    render(){
        const {
            fullname,
            username,
            email,
            twitter,
            linkedin,
            instagram,
            photoUrl,
        } = this.state;

        const inValid = 
            fullname === '' ||
            username === '' ||
            email === '' ||
            twitter === '' ||
            linkedin === '' ||
            instagram === ''; 

        return(
            <Fragment>
                <div className="container mt-4">
                <Link className="btn btn-warning float-right" to="/password-change">Change Password</Link>

                    <h1>Edit Profile</h1>
                    <div className="row mt-4">
                        <div className="col-sm-1">
                            <img src={photoUrl} className="edit-pro-image rounded-circle" alt="edit-pro-image"/>
                        </div>
                        <div className="edit-detail col-4">
                            <form onSubmit={this.onSubmit}>
                                <div className="input-group">
                                    <input type="text" name="fullname" value={fullname} onChange={this.onChange} className="form-control"/>
                                </div>
                                <div className="input-group mt-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">@</div>
                                    </div>
                                    <input type="text" disabled name="username" value={username} onChange={this.onChange} className="form-control"/>
                                </div>
                                <div className="input-group mt-2">
                                    <input type="text" disabled name="email" value={email} onChange={this.onChange} className="form-control"/>
                                </div>
                                <div className="input-group mt-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">@twitter</div>
                                    </div>
                                    <input type="text" name="twitter" value={twitter} onChange={this.onChange} className="form-control"/>
                                </div>
                                <div className="input-group mt-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">@linkedin</div>
                                    </div>
                                    <input type="text" name="linkedin" value={linkedin} onChange={this.onChange} className="form-control"/>
                                </div>
                                <div className="input-group mt-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">@instagram</div>
                                    </div>
                                    <input type="text" name="instagram" value={instagram} onChange={this.onChange} className="form-control"/>
                                </div>
                                <button type="submit" disabled={inValid} className="btn btn-success float-right mt-2">Save Changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const condition = authUser => !!authUser;

const EditProfile = compose(
    withAuthentication,
    withAuthorization(condition),
    withFirebase,
)(Edit);

export default EditProfile;