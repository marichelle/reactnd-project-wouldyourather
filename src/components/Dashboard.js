import React from 'react';
import { connect } from 'react-redux';

import Question from './Question';

class Dashboard extends React.Component {
  render() {
    const { questionIds } = this.props;

    return (
      <div>
        <h3>Questions</h3>
        <ul className="question-list">
          {questionIds.map(questionId => (
            <li key={questionId}>
              <Question id={questionId} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  // sort questions from newest to oldest
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[a].timestamp - questions[b].timestamp
    )
  };
}

export default connect(mapStateToProps)(Dashboard);
