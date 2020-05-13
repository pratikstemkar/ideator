import React, {Fragment} from 'react';
 
import { withAuthorization } from '../session';

import PostStory from './PostStory';
import Posts from './Posts';
import UserFollow from './UserFollow';
 
const Home = () => (
  <Fragment>
    <div className="container">
      <div className="row mt-4">
        <div className="col">
          <PostStory />

          <Posts />
          
        </div>
        <div className="col-md-4">
          <UserFollow />
        </div>
      </div>
    </div>
  </Fragment>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Home);