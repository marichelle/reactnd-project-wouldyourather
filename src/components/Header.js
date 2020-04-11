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

    const { dispatch, history } = this.props;

    // reset authorized user
    dispatch(setAuthorizedUser());

    // redirect to root
    history.push('/');
  };

  render() {
    const { activeUser } = this.props;
    let avatar = '';
    let name = '';

    if (activeUser !== null) {
      avatar = activeUser.avatarURL;
      name = activeUser.name;
    }

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
              <span>{name !== '' ? `Hello, ${name}!` : ''}</span>
              {avatar !== '' && (
                <img
                  className="ui avatar image"
                  src={avatar}
                  alt={`Avatar of ${name}`}
                />
              )}
            </span>
            <a className="ui item" onClick={this.handleLogout}>
              Logout
            </a>
          </div>
        </div>
        <div className="ui hidden divider"></div>
      </div>
    );
  }
}

export default withRouter(connect()(Header));
