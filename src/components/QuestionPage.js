import React from 'react';
import { connect } from 'react-redux';

import AnswerForm from './AnswerForm';

class QuestionPage extends React.Component {
  render() {
    const { id } = this.props;

    return (
      <div className="ui one cards centered raised">
        <AnswerForm key={id} id={id} />
      </div>
    );
  }
}

function mapStateToProps({ questions }, props) {
  return { id: props.match.params.id };
}

export default connect(mapStateToProps)(QuestionPage);
