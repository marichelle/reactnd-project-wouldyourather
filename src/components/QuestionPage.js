import React from 'react';
import { connect } from 'react-redux';

import AnswerForm from './AnswerForm';
import AnswerResults from './AnswerResults';

class QuestionPage extends React.Component {
  render() {
    const { id, answered } = this.props;

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

  return {
    id,
    answered,
  };
}

export default connect(mapStateToProps)(QuestionPage);
