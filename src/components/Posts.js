import React, {Fragment, Component} from 'react';

import {AuthUserContext} from '../session';
import {withFirebase} from '../firebase';
import PostList from './PostList';

class Posts extends Component {
    constructor(props){
        super(props);

        this.state = {
            posttext: '',
            postimg: '',
            loading: false,
            posts: [],
            limit: 5,
        };
    }

    componentDidMount(){
        this.onListenForPosts();
    }

    onListenForPosts = () => {
        this.setState({loading: true});

        this.unsubscribe = this.props.firebase
            .posts()
            .orderBy('createdAt', 'desc')
            .limit(this.state.limit)
            .onSnapshot(snapshot => {
                if(snapshot.size){
                    let posts = [];
                    snapshot.forEach(doc => {
                        posts.push({ ...doc.data(), uid: doc.id });
                    });

                    this.setState({
                        posts: posts.reverse(),
                        loading: false,
                    });
                } else{
                    this.setState({ posts: null, loading: false });
                }
            });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onChangePost = event => {
        this.setState({ posttext: event.target.value });
    }

    onCreatePost = (event, authUser) => {
        this.props.firebase.posts().add({
            posttext:  this.state.posttext,
            postimg: "https://i.picsum.photos/id/1005/5760/3840.jpg",
            userId: authUser.id,
            createdAt: this.props.firebase.fieldValue.serverTimestamp(),
        });

        this.setState({ posttext: '' })

        event.preventDefault();
    }

    onEditPost = (post, posttext) => {
        const { uid, ...postSnapshot } = post;

        this.props.firebase.post(post.uid).update({
            ...postSnapshot,
            posttext,
            editedAt: this.props.firebase.fieldValue.serverTimestamp(),
        });
    }

    onRemovePost = uid => {
        this.props.firebase.post(uid).delete();
    }

    onNextPage = () => {
        this.setState(
            state => ({ limit: state.limit + 5 }),
            this.onListenForMessages,
          );
    }

    render() {
        const {posttext, posts, loading} = this.state;

        return(
            <Fragment>
                <AuthUserContext.Consumer>
                    {authUser => (
                        <div>
                            {!loading && (
                                <button type="button" onClick={this.onNextPage}>More Posts</button>
                            )}

                            {loading && <div>Laoding...</div>}

                            {posts && (
                                <PostList
                                    authUser={authUser}
                                    posts={posts}
                                    onEditPost={this.onEditPost}
                                    onRemovePost={this.onRemovePost}
                                />
                            )}

                            {!posts && <div>No posts</div>}

                            <form
                                onSubmit={event =>
                                    this.onCreatePost(event, authUser)
                                }
                                >
                                <input
                                    type="text"
                                    value={posttext}
                                    onChange={this.onChangePost}
                                />
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    )}
                </AuthUserContext.Consumer>
            </Fragment>
        );
    }
}

export default withFirebase(Posts);