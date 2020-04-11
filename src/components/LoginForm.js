/*
Sign In
<user drop down menu>
<sign in button>
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthorizedUser } from '../actions/authorizedUser';

class LoginForm extends Component {
  state = {
    error: false,
    userId: '',
  };

  handleChange = (e) => {
    const userId = e.target.value;

    this.setState(() => ({
      error: userId === '' ? true : false,
      userId,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { cookies, dispatch } = this.props;
    const { userId } = this.state;

    if (userId !== '') {
      //setting a cookie
      cookies.set('user-id', userId, { path: '/' });

      // authorize user
      dispatch(setAuthorizedUser(userId));

      // redirect to root
    }
  };

  render() {
    const { users } = this.props;
    const { error, userId } = this.state;

    return (
      <div className="ui one column grid">
        <div className="column">
          <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="ui raised very padded text container segments">
              <div className="ui center aligned segment">
                <h2>Welcome to the Would You Rather App!</h2>
                <div className="meta">Please login to continue</div>
              </div>
              <div className="ui segment">
                {users !== null && (
                  <div className="field">
                    {error === true && (
                      <div className="ui pointing below red basic label">
                        Please select a user
                      </div>
                    )}
                    <select
                      className="ui dropdown"
                      onChange={this.handleChange}
                      value={userId}
                    >
                      <option value="">Select User</option>
                      {users.map((user) => (
                        <option key={user.id} value={user.id}>
                          {user.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <button
                  type="submit"
                  className="ui fluid teal button"
                  disabled={userId === ''}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }, props) {
  return {
    cookies: props.cookies,
    users: Object.keys(users)
      .map((user) => users[user])
      .sort((a, b) => (a.name > b.name ? 1 : -1)),
  };
}

export default connect(mapStateToProps)(LoginForm);
