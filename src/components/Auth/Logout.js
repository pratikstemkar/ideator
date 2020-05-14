import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../../firebase';

const Logout = ({ firebase }) => {
    return(
        <Fragment>
            <Link type="button" to="/login" className="nav-link" onClick={ firebase.doSignOut }>
                Logout
            </Link>
        </Fragment>
    );
}

export default withFirebase(Logout);