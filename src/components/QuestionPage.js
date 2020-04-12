import React from 'react';
import { connect } from 'react-redux';

import AnswerForm from './AnswerForm';
import AnswerResults from './AnswerResults';

class QuestionPage extends React.Component {
  render() {
    const { id, answered, exists } = this.props;

    if (!exists) {
      return (
        <div className="ui one cards centered raised">
          <div className="ui compact big error message">
            Question not found!
          </div>
        </div>
      );
    }

    return (
      <div className="ui one cards centered raised">
        {answered !== true ? (
          <AnswerForm key={id} id={id} />
        ) : (
          <AnswerResults key={id} id={id} />
        )}
      </div>
    );
  }
}

function mapStateToProps({ authorizedUser, questions, users }, props) {
  const { id } = props.match.params;
  const answered = users[authorizedUser].answers.hasOwnProperty(id);
  const exists = questions[id] ? true : false;

  return {
    id,
    answered,
    exists,
  };
}

export default connect(mapStateToProps)(QuestionPage);
