/*
Container for Scorecards
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scorecard from './Scorecard';

class Leaderboard extends Component {
  render() {
    const { users } = this.props;

    return (
      <div id="leaderboard" className="ui grid container">
        {users.map((user, idx) => (
          <Scorecard key={user.id} user={user} position={idx + 1} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const formattedUsers = Object.keys(users).map((user) => {
    const currUser = users[user];
    const { answers, questions } = currUser;
    const answered = Object.keys(answers).length;
    const created = questions.length;

    return {
      ...currUser,
      answered,
      created,
      score: answered + created,
    };
  });

  return {
    users: formattedUsers.sort((a, b) => b.score - a.score),
  };
}

export default connect(mapStateToProps)(Leaderboard);
