/*
<author> asks:

Would you rather...
- Option 1
- Option 2
<submit button>
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleAddAnswer } from '../actions/users';

class AnswerForm extends Component {
  state = {
    answer: '',
  };

  handleChange = (e) => {
    const answer = e.target.value;

    this.setState(() => ({
      answer,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { dispatch, question } = this.props;
    const { answer } = this.state;

    dispatch(handleAddAnswer(answer, question.id));

    // reset state
    this.setState(() => ({
      answer: '',
    }));
  };

  render() {
    const questionKeys = ['optionOne', 'optionTwo'];
    const { author, authorizedUser, question } = this.props;
    const { id, name, avatarURL } = author;
    const { answer, redirect } = this.state;

    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="ui raised very padded text container segments">
          <div className="ui secondary segment">
            <h3>{authorizedUser === id ? 'You Asked:' : `${name} Asks:`}</h3>
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
              <h2>Would you rather...</h2>
              {questionKeys.map((key) => (
                <div key={key} className="field">
                  <div className="ui radio checkbox">
                    <input
                      id={key}
                      type="radio"
                      name="answer"
                      value={key}
                      checked={answer === key}
                      onChange={this.handleChange}
                    />
                    <label htmlFor={key}>{question[key].text}</label>
                  </div>
                </div>
              ))}
              <button
                type="submit"
                className="ui fluid teal button"
                disabled={answer === ''}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

function mapStateToProps({ authorizedUser, questions, users }, props) {
  const { id } = props;
  const question = questions[id];
  const answered = users[authorizedUser].answers.hasOwnProperty(id);

  return {
    author: users[question.author],
    authorizedUser,
    question,
    answered,
  };
}

export default connect(mapStateToProps)(AnswerForm);
