import React, {Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import { WaveLoading } from 'react-loadingg';

import UserFollow from './UserFollow';

import { withAuthorization, AuthUserContext  } from '../session';

import Post from './Post';

class Profile extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          loading: false,
          user: null,
          ...props.location.state,
        };
      }
    
      componentDidMount() {
        if (this.state.user) {
          return;
        }
    
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
          const {user, loading} = this.state;

          return(
            <Fragment>
                {loading && <div><WaveLoading/></div>}
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-sm-3">
                            <img src={user.photoUrl} class="profile-page-image rounded-circle shadow bg-white rounded" alt=""/>
                        </div>
                        <div className="col-3">
                            <div className="name-detail">
                                <span className="pro-fullname">
                                    {user.fullname}  
                                    <AuthUserContext.Consumer>
                                        {authUser => user.username === authUser.username ? <sup><Link to="/notifications" className="badge badge-danger">2</Link></sup> : null}
                                    </AuthUserContext.Consumer>
                                </span>
                                <br/>
                                <span className="pro-username">{user.username}</span>
                                <br/>
                                <a href={'mailto:' + user.email}>{user.email}</a>
                                <br/>
                                <div className="mt-2">
                                    <a className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer" href={'https://twitter.com/' + user.twitter}>Twitter</a>
                                    <a className="btn btn-outline-info ml-2" target="_blank" rel="noopener noreferrer" href={'https://linkedin.com/in/' + user.linkedin}>LinkedIn</a>
                                    <a className="btn btn-outline-danger ml-2" target="_blank" rel="noopener noreferrer" href={'https://instagram.com/' + user.instagram}>Instagram</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <AuthUserContext.Consumer>
                                {authUser => user.username === authUser.username ? <Link className="btn btn-secondary float-right" to="/edit-profile">Edit Profile</Link> : null}
                            </AuthUserContext.Consumer>
                        
                            
                            <div className="pro-fol">
                                <span className="pro-followers">141 Followers</span>
                                <span className="pro-following ml-4">422 Following</span>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="container mt-4">
                        <div className="row">
                            <div className="col">
                                <Post />
                            </div>
                            <div className="col-md-4">
                                <hr/>
                                <UserFollow />
                            </div>
                        </div>
                </div>
            </Fragment>
        );
      }
}

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Profile);