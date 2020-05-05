import React, { Fragment } from 'react';
import {Animated} from 'react-animated-css';


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

export default Users;