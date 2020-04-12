import React, { Component, Fragment } from 'react';
import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard';
import Header from './Header';
import LoginForm from './LoginForm';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';
import NotFound from './NotFound';
import QuestionPage from './QuestionPage';
import LoadingBar from 'react-redux-loading';

import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    const { cookies, dispatch } = this.props;

    dispatch(handleInitialData(cookies.get('user-id')));
  }

  render() {
    const { activeUser, cookies } = this.props;

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            {activeUser !== null ? (
              <div>
                <Header activeUser={activeUser} cookies={cookies} />
                <Switch>
                  <Route path="/" exact component={Dashboard} />
                  <Route path="/add" component={NewQuestion} />
                  <Route path="/leaderboard" component={Leaderboard} />
                  <Route path="/question/:id" component={QuestionPage} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            ) : (
              <LoginForm cookies={cookies} />
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

export default withCookies(connect(mapStateToProps)(App));
