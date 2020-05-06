import React, { Component } from 'react';
 
import { withFirebase } from '../firebase';
import cogoToast from 'cogo-toast';
 
const INITIAL_STATE = {
  pass1: '',
  pass2: '',
  error: null,
};
 
class PassChange extends Component {
  constructor(props) {
    super(props);
 
    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { pass1 } = this.state;
 
    cogoToast.loading('Updating Password...').then(() => {
        this.props.firebase
            .doPasswordUpdate(pass1)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                cogoToast.success('Password Updated Successfully');
            })
            .catch(error => {
                this.setState({ error });
                cogoToast.error(error.message);
            });
    })
 
    event.preventDefault();
  };
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const { pass1, pass2 } = this.state;
 
    const isInvalid =
      pass1 !== pass2 || pass1 === '';
 
    return (
        <form onSubmit={this.onSubmit} className="centered mt-2">
            <legend>Password Change</legend>
            <div className="form-group">
                <label htmlFor="pass">New Password</label>
                <input type="password" className="form-control" id="pass" name="pass1" value={pass1} onChange={this.onChange} placeholder="Enter Password" />
            </div>
            <div className="form-group">
                <label htmlFor="pass">Confirm Password</label>
                <input type="password" className="form-control" id="pass" name="pass2" value={pass2} onChange={this.onChange} placeholder="Confirm Password" />
            </div>
            <button type="submit" disabled={isInvalid} className="btn btn-primary mt-2">Change Password</button>
        </form>
    );
  }
}
 
export default withFirebase(PassChange);