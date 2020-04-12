/*
- Navigation
  - Home
  - Leaderboard
  - New Question
- Authorized user details
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import { setAuthorizedUser } from '../actions/authorizedUser';

class Header extends Component {
  handleLogout = (e) => {
    e.preventDefault();

    const { cookies, dispatch, history } = this.props;

    // reset authorized user
    dispatch(setAuthorizedUser());

    // remove user cookie
    cookies.remove('user-id', { path: '/' });

    // redirect to root
    history.push('/');
  };

  render() {
    const { activeUser } = this.props;
    const { avatarURL, name } = activeUser;

    return (
      <div id="header">
        <div className="ui teal secondary pointing menu">
          <NavLink activeClassName="active" className="item" to="/" exact>
            Home
          </NavLink>
          <NavLink activeClassName="active" className="item" to="/leaderboard">
            Leaderboard
          </NavLink>
          <NavLink activeClassName="active" className="item" to="/add" exact>
            New Question
          </NavLink>
          <div className="right menu">
            <span className="ui item">
              <span>{activeUser !== null ? `Hello, ${name}!` : ''}</span>
              {activeUser !== null && (
                <img
                  className="ui avatar image"
                  src={avatarURL}
                  alt={`Avatar of ${name}`}
                />
              )}
            </span>
            <a className="ui item" href="/#" onClick={this.handleLogout}>
              Logout
            </a>
          </div>
        </div>
        <div className="ui hidden divider"></div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    cookies: props.cookies,
  };
}

export default withRouter(connect(mapStateToProps)(Header));
