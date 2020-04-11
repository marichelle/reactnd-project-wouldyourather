import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

import Dashboard from './Dashboard';
import Header from './Header';
import LoginForm from './LoginForm';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';
import LoadingBar from 'react-redux-loading';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { activeUser } = this.props;

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            {activeUser !== null ? (
              <div>
                <Header activeUser={activeUser} />
                <Route path="/" exact component={Dashboard} />
                <Route path="/add" component={NewQuestion} />
                <Route path="/leaderboard" component={Leaderboard} />
              </div>
            ) : (
              <LoginForm />
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authorizedUser, users }) {
  const activeUser = authorizedUser && users ? users[authorizedUser] : null;

  return {
    activeUser,
  };
}

export default connect(mapStateToProps)(App);
