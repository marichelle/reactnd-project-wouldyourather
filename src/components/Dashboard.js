import React from 'react';
import { connect } from 'react-redux';

import Question from './Question';

class Dashboard extends React.Component {
  state = {
    activeTab: 'unanswered',
  };

  handleTabLink = (e, activeTab) => {
    e.preventDefault();

    this.setState(() => ({
      activeTab,
    }));
  };

  render() {
    const { answered, questionIds } = this.props;
    const { activeTab } = this.state;
    const questions = {
      answered: questionIds.filter((id) => answered.includes(id)),
      unanswered: questionIds.filter((id) => !answered.includes(id)),
    };
    const tabs = [
      {
        id: 'answered',
        name: 'Answered',
      },
      {
        id: 'unanswered',
        name: 'Unanswered',
      },
    ];

    return (
      <div className="ui grid">
        <div className="three column row">
          <div className="four wide column"></div>
          <div className="eight wide column">
            <div className="ui attached tabular top two item menu">
              {tabs.map((tab) => (
                <a
                  href="/#"
                  key={tab.id}
                  className={'item' + (activeTab === tab.id ? ' active' : '')}
                  data-tab={tab.id}
                  onClick={(e) => this.handleTabLink(e, tab.id)}
                >
                  {tab.name}
                </a>
              ))}
            </div>
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={
                  'ui bottom attached tab segment' +
                  (activeTab === tab.id ? ' active' : '')
                }
                data-tab={tab.id}
              >
                <div className="ui one cards centered raised">
                  {questions[tab.id].length ? (
                    questions[tab.id].map((id) => <Question key={id} id={id} />)
                  ) : (
                    <div className="no-results">
                      No {tab.id} questions exist!
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authorizedUser, questions, users }) {
  const activeUser = users[authorizedUser];

  return {
    answered: activeUser ? Object.keys(users[authorizedUser].answers) : [],
    // sort questions from newest to oldest
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[a].timestamp - questions[b].timestamp
    ),
  };
}

export default connect(mapStateToProps)(Dashboard);
