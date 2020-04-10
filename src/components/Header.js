/*
- Navigation
  - Home
  - Leaderboard
  - New Question
- Authorized user details
*/

import React from 'react';

const Header = (props) => {
  const { activeUser } = props;
  let avatar = '';
  let name = '';

  if (activeUser !== null) {
    avatar = activeUser.avatarURL;
    name = activeUser.name;
  }

  return (
    <div id="header">
      <div className="ui secondary pointing menu">
        <a className="item active">Home</a>
        <a className="item">Leaderboard</a>
        <a className="item">New Question</a>
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
          <a className="ui item">Logout</a>
        </div>
      </div>
      <div className="ui hidden divider"></div>
    </div>
  );
};

export default Header;
