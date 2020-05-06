import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

const Landing = () => {
    return(
        <Fragment>

            {/* CAROUSEL */}

            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
                    <div className="container">
                    <div className="carousel-caption text-left">
                        <h1>Join today !!</h1>
                        <p>Everyone is sharing their stories on Ideator. What are you waiting for?</p>
                        <p><Link className="btn btn-lg btn-primary" to="/register" role="button">Sign Up Today</Link></p>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
                    <div className="container">
                    <div className="carousel-caption">
                        <h1>Great Image Handling</h1>
                        <p>We got the best back-end for your images.</p>
                        <p><Link className="btn btn-lg btn-primary" to="/about" role="button">Learn more</Link></p>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
                    <div className="container">
                    <div className="carousel-caption text-right">
                        <h1>One more for good measure.</h1>
                        <p>Dive into the world of endless stories.</p>
                        <p><Link className="btn btn-lg btn-primary" to="/home" role="button">Browse gallery</Link></p>
                    </div>
                    </div>
                </div>
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>

            {/* CONTENT MARKETING */}

            <div className="container marketing">
                <h2 className="center mb-3">Developers</h2>
                <div className="row">
                    {/* <div className="col-lg-4">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div> */}
                    <div className="col-sm center">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                        <h3 className="mt-2">Pratik Temkar</h3>
                        <p>I am a Second Year Undergraduate at the Department of Computer Engineering at Modern Education Society's College of Engineering, Pune. I am a technology enthusiast and love to challenge myself with real world problems. I am an avid supporter of Open Source and contribute to Organisations as much as possible. I am interested in Mobile App Development.
Currently, I am learning Machine Learning technologies. I would soon use Machine Learning to solve real world problems.</p>
                        <p><a className="btn btn-info mb-4" href="http://pratikstemkar.me" target="_blank" rel="noopener noreferrer" role="button">View Portfolio &raquo;</a></p>
                    </div>
                    {/* <div className="col-lg-4">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div> */}
                </div>
            </div>

            
            
        </Fragment>
    );
}

export default Landing;