import React, { Fragment } from 'react';
import {Animated} from 'react-animated-css';

import { withAuthorization } from '../session';

const Users = () => {
    return(
        <Fragment>
            <div className="container">
                <Animated animationIn="shake" animationOut="fadeOut" isVisible={true}>
                    <div>
                        <h1>Users</h1>
                    </div>
                </Animated>
            </div>
        </Fragment>
    );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Users);