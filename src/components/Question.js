import React from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helper';
import { Link } from 'react-router-dom';

class Question extends React.Component {
  render() {
    const { id, author, avatar, optionOne, optionTwo, timestamp } = this.props;

    return (
      <div className="card">
        <div className="content">
          <img className="left floated ui avatar image" src={avatar} />
          <div className="header">{author}</div>
          <div className="meta">{timestamp}</div>
        </div>
        <div className="content">
          <div className="ui center aligned description">
            {optionOne}
            <div className="ui horizontal divider">OR</div>
            {optionTwo}
          </div>
        </div>
        <div className="extra content">
          <Link className="fluid ui basic green button" to={`/question/${id}`}>
            View Poll
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authorizedUser, questions, users }, { id }) {
  const question = questions[id];
  const questionFormatted = question
    ? formatQuestion(question, users[question.author], users[authorizedUser])
    : null;

  return {
    ...questionFormatted,
  };
}

export default connect(mapStateToProps)(Question);
