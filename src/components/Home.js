import React, {Fragment} from 'react';
 
import { withAuthorization } from '../session';

import PostStory from './PostStory';
import Post from './Post';
 
const Home = () => (
  <Fragment>
    <div className="container">
      <div className="row mt-4">
        <div className="col">
          <PostStory />

          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          
        </div>
        <div className="col-md-3">
          <h2>Suggestion</h2>
        </div>
      </div>
    </div>
  </Fragment>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Home);