import React, {Fragment} from 'react';
import {Animated} from 'react-animated-css';

const Contact = () => {
    return(
        <Fragment>
            <div className="container">
                <Animated animationIn="shake" animationOut="fadeOut" isVisible={true}>
                    <div>
                        <h1>Contact</h1>
                    </div>
                </Animated>
            </div>
        </Fragment>
    );
}

export default Contact;