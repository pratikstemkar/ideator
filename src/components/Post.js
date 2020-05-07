import React, {Fragment} from 'react';

const Post = () => {
    return(
        <Fragment>
            <hr/>
            <div className="row">
                <div className="col-1">
                <img src="https://i.picsum.photos/id/1005/5760/3840.jpg" class="post-profile-image rounded-circle shadow bg-white rounded" alt=""/>
                </div>
                <div className="col username-post-image">
                <span className="align middle"><b>username</b></span>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                <img src="https://i.picsum.photos/id/1005/5760/3840.jpg" className="post-image rounded" alt=""/>
                </div>
            </div>
            <div className="like-comment row mt-2">
                <div className="likes-count">
                421 Likes
                </div>
                <div className="comment-count ml-4">
                21 Comments
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-1">
                <b>username</b>
                </div>
                <div className="col ml-4">
                <div className="row">
                    some caption man some cpation some caption man some cpationsome caption man some cpationsome caption man some cpationsome caption man some cpationsome caption man some cpationsome caption man some cpationsome caption man some cpationsome caption man some cpationsome caption man some cpation
                </div>
                <div className="row">
                    <small className="mt-2 mb-2">4 Hours ago</small>
                </div>            
                </div>
            </div>
        </Fragment>
    );
}

export default Post;