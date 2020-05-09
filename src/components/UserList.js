import React, { Fragment, Component } from 'react';
import { WaveLoading } from 'react-loadingg';

import { withFirebase } from '../firebase';
import UserItem from './UserItem';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.unsubscribe = this.props.firebase
      .users()
      .onSnapshot(snapshot => {
        let users = [];

        snapshot.forEach(doc =>
          users.push({ ...doc.data(), uid: doc.id }),
        );

        this.setState({
          users,
          loading: false,
        });
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <Fragment>
            {loading && <div><WaveLoading/></div>}
            {users.map(user => (
                    <UserItem key={user.id} user={user}/>
            ))}
      </Fragment>
    );
  }
}

export default withFirebase(UserList);