import React, {Fragment} from 'react';
 
import { withAuthorization } from '../session';
 
const Home = () => (
  <Fragment>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </Fragment>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Home);