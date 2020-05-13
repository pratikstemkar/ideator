import React, {Fragment, Component} from 'react';

class Post extends Component {
    constructor(props){
        super(props);

        this.state = {
            editMode: false,
            editText: this.props.post.posttext,
        };
    }

    onToggleEditMode = () => {
        this.setState(state => ({
            editMode: !state.editMode,
            editText: this.props.post.posttext,
        }));
    }

    onChangeEditText = event => {
        this.setState({ editText: event.target.value });
    }

    onSaveEditText = () => {
        this.props.onEditPost(this.props.post, this.state.editText);

        this.setState({ editMode: false });
    }

    render(){
        const { authUser, post, onRemovePost } = this.props;
        const { editMode, editText } = this.state;

        return(
            <Fragment>

                {editMode ? (
                        <input
                            type="text"
                            value={editText}
                            onChange={this.onChangeEditText}
                        />
                        ) : (
                        <span>
                            <strong>{post.userId}</strong> {post.text}
                            {post.editedAt && <span>(Edited)</span>}
                        </span>
                        )}

                        {authUser.uid === post.userId && (
                        <span>
                            {editMode ? (
                            <span>
                                <button onClick={this.onSaveEditText}>Save</button>
                                <button onClick={this.onToggleEditMode}>Reset</button>
                            </span>
                            ) : (
                            <button onClick={this.onToggleEditMode}>Edit</button>
                            )}

                            {!editMode && (
                            <button
                                type="button"
                                onClick={() => onRemovePost(post.uid)}
                            >
                                Delete
                            </button>
                            )}
                        </span>
                        )}

                <hr/>
                <div className="row">
                    <div className="col-1">
                    <img src="https://i.picsum.photos/id/1005/5760/3840.jpg" class="post-profile-image rounded-circle" alt=""/>
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
                    <div className="col-2">
                        <b>username</b>
                    </div>
                    <div className="col">
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
}

export default Post;