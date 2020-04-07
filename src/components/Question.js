import React from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helper';

class Question extends React.Component {
  redirectToPDP = (e, id) => {
    e.preventDefault();

    // todo: redirect to poll detail page
    console.log('id', id);
  };

  render() {
    const {
      id,
      author,
      avatar,
      optionOne,
      optionTwo,
      timestamp,
      isAnswered,
    } = this.props;

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
          <div
            className="fluid ui basic green button"
            onClick={(e) => this.redirectToPDP(e, id)}
          >
            View Poll
          </div>
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
