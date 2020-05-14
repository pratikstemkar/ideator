import React, {Fragment} from 'react';
import UserList from './UserList';

const UserFollow = () => {
    return(
        <Fragment>
            <h5>Follow Suggestion</h5>
            <div className="suggest-user rounded-lg p-2">
                <UserList />
                
            </div>
        </Fragment>
    );
}

export default UserFollow;