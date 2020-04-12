import React from 'react';
import { connect } from 'react-redux';

import AnswerForm from './AnswerForm';
import AnswerResults from './AnswerResults';
import Error404 from './Error404';

class QuestionPage extends React.Component {
  render() {
    const { id, answered, exists } = this.props;

    return (
      <div className="ui one cards centered raised">
        {exists ? (
          answered !== true ? (
            <AnswerForm key={id} id={id} />
          ) : (
            <AnswerResults key={id} id={id} />
          )
        ) : (
          <Error404 />
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
