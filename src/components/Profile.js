import React, {Fragment} from 'react';

import { withAuthorization, AuthUserContext } from '../session';

const Profile = () => {
    return(
        <Fragment>
            <AuthUserContext.Consumer>
                {authUser => (
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-sm-3">
                                <h1><img src="https://i.picsum.photos/id/1005/5760/3840.jpg" class="profile-page-image rounded-circle shadow bg-white rounded" alt=""/></h1>
                            </div>
                            <div className="col">
                                Full Name
                                <br/>
                                username
                                <br/>
                                <a href={'mailto:' + authUser.email}>{authUser.email}</a>
                            </div>
                        </div>
                    </div>
                )}
            </AuthUserContext.Consumer>
        </Fragment>
    );
}

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Profile);