import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {withAuthorization, withAuthentication} from '../session';
import { withFirebase } from '../firebase';
import { compose } from 'recompose';

import cogoToast from 'cogo-toast';

class Edit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            user: null,
            ...props.location.state,
        };
    }

    onSubmit = event => {
        const { uid, fullname, username, email, twitter, linkedin, instagram, photoUrl, error } = this.state;

        cogoToast.loading('Updating Profile').then(() => {
            this.props.firebase.user(uid).update({
                fullname,
                username,
                email, 
                twitter,
                linkedin,
                instagram
            }).then(() => {
                cogoToast.success('Profile Updated');
            })
            .catch((error) => {
                cogoToast.error(error.message);
                this.setState({error});
            });
        });

        event.preventDefault();
    }

    onChange = event => {
       this.setState({ [event.target.name]: event.target.value });
    }

    componentDidMount() {
    
        this.setState({ loading: true });
    
        this.unsubscribe = this.props.firebase
            .user(this.props.match.params.id)
            .onSnapshot(snapshot => {
            this.setState({
                user: snapshot.data(),
                loading: false,
                });
            });
    }

    componentWillUnmount() {
        this.unsubscribe && this.unsubscribe();
    }

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
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">@</div>
                                    </div>
                                    <input type="text" disabled name="username" value={username} onChange={this.onChange} className="form-control"/>
                                </div>
                                <div className="input-group mt-2">
                                    <input type="text" disabled name="email" value={email} onChange={this.onChange} className="form-control"/>
                                </div>
                                <div className="input-group mt-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">@twitter</div>
                                    </div>
                                    <input type="text" name="twitter" value={twitter} onChange={this.onChange} className="form-control"/>
                                </div>
                                <div className="input-group mt-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">@linkedin</div>
                                    </div>
                                    <input type="text" name="linkedin" value={linkedin} onChange={this.onChange} className="form-control"/>
                                </div>
                                <div className="input-group mt-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">@instagram</div>
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
    withAuthorization(condition),
    withFirebase,
)(Edit);

export default EditProfile;