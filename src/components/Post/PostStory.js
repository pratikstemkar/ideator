import React, {Fragment} from 'react';



class PostStory extends React.Component {
    render(){
        return(
            <Fragment>
                <div className="row">
                    <div className="col-1">
                    <img src="https://i.picsum.photos/id/1005/5760/3840.jpg" class="home-page-image rounded-circle shadow bg-white rounded" alt=""/>
                    </div>
                    <div className="col ml-4">
                    <form enctype="multipart/form-data">
                        <div className="form-group">
                            <textarea className="form-control" name="post-text" id="post-text" rows="6" placeholder="Enter your story" aria-describedby="post-help" />
                            <small id="post-help" className="form-text text-muted">Story should be short and precise.</small>
                        </div>
                        <div className="form-group">
                            <input type="file" accept="image/*" class="form-control-file btn btn-outline-secondary" id="post-image" />
                        </div>
                        <button type="submit" className="btn btn-outline-primary float-right">Post</button>
                    </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default PostStory;