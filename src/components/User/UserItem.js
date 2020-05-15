import React, {Fragment, Component} from 'react';
import {Link} from 'react-router-dom';

import {withFirebase} from '../../firebase';

const UserItem = ({user}) => {
    return(
        <Fragment>
            <div className="user-item">
                <Link
                    to={{
                        pathname: `/user/${user.username}`,
                        state: { user },
                    }}
                >
                <div className="row mt-2">
                    <div className="col-sm-2">
                        <img className="user-item-image rounded-circle" src={user.photoUrl} alt=""/>
                    </div>
                    <div className="col">
                        {user.username}
                    </div>
                    <div className="col">
                        <Link to="/" className="btn btn-sm btn-outline-primary rounded-lg float-right">Follow</Link>
                    </div>
                </div>
                </Link>
            </div>
        </Fragment>
    );
}

export default withFirebase(UserItem);