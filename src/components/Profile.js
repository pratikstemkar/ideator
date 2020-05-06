import React, {Fragment} from 'react';

import { withAuthorization, AuthUserContext } from '../session';

const Profile = () => {
    return(
        <Fragment>
            <AuthUserContext.Consumer>
                {authUser => (
                    <div className="container">
                        {authUser.email}
                    </div>
                )}
            </AuthUserContext.Consumer>
        </Fragment>
    );
}

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Profile);