import React, {Fragment} from 'react';

import {withAuthorization} from '../../session';

const Notifications = () => {
    return(
        <Fragment>
            <div className="container">
                <h1>Notifications</h1>
            </div>
        </Fragment>
    );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Notifications);