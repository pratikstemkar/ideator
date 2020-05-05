import React from 'react';

import { FirebaseContext } from '../firebase'

const FirebaseAck = ()  => {
    return(
        <FirebaseContext.Consumer>
            {firebase => {
                return <div className="text-muted" align="center">I've access to Firebase and render something.</div>;
            }}
        </FirebaseContext.Consumer>
    );
}

export default FirebaseAck;