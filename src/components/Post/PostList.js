import React, {Fragment} from 'react';

import Post from './PostItem';

const PostList = ({ authUser, posts, onEditPost, onRemovePost }) => {
    return (
        <Fragment>
            {posts.map(post => (
                <Post
                    authUser={authUser}
                    key={post.uid}
                    post={post}
                    onEditpost={onEditPost}
                    onRemovepost={onRemovePost}
                />
            ))}
        </Fragment>
    );
}

export default PostList;