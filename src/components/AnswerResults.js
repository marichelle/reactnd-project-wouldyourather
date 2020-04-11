/*
Asked by <author>

Results:
Option 1: x/y votes | % voted
Option 2: x/y votes | % voted
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnswerResults extends Component {
  render() {
    const { author, authorizedUser, question, totalVotes } = this.props;
    const { name, avatarURL } = author;
    const questionKeys = ['optionOne', 'optionTwo'];

    return (
      <div className="ui raised very padded text container segments">
        <div className="ui secondary segment">
          <h3>Asked by {name}:</h3>
        </div>
        <div className="ui horizontal segments">
          <div className="ui segment">
            <img
              className="ui small centered circular image"
              src={avatarURL}
              alt={`Avatar of ${name}`}
            />
          </div>
          <div className="ui segment">
            <h2>Results:</h2>
            {questionKeys.map((key) => {
              return (
                <div className="ui fluid teal card" key={key}>
                  <div className="content">
                    <div className="center aligned header">
                      Would you rather {question[key].text}?
                    </div>
                  </div>
                  <div className="content">
                    <div className="description">
                      <div className="ui two teal statistics">
                        <div className="ui statistic">
                          <div className="value">
                            {question[key].votes.length} / {totalVotes}
                          </div>
                          <div className="label">Votes</div>
                        </div>
                        <div className="statistic">
                          <div className="value">
                            {Math.round(
                              (question[key].votes.length / totalVotes) * 100
                            )}
                          </div>
                          <div className="label">Percent</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {question[key].votes.includes(authorizedUser) && (
                    <div className="extra center aligned content">
                      <i className="check green icon"></i>
                      Your Vote
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authorizedUser, questions, users }, props) {
  const { id } = props;
  const question = questions[id];

  return {
    author: users[question.author],
    authorizedUser,
    question,
    totalVotes:
      question.optionOne.votes.length + question.optionTwo.votes.length,
  };
}

export default connect(mapStateToProps)(AnswerResults);
