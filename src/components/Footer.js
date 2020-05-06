import React, { Fragment } from 'react';

const Footer = () => {
    return(
        <Fragment>
            <footer className="footer">
                <div className="container center">
                    <span className="text-muted">Made with <span role="img" aria-label="heart">❤️</span> by <a href="http://pratikstemkar.me" target="_blank" rel="noopener noreferrer">PRATIK</a> &copy; 2020</span>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;