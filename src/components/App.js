import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard';
import Error404 from './Error404';
import Header from './Header';
import LoginForm from './LoginForm';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';
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
        <>
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
                  <Route component={Error404} />
                </Switch>
              </div>
            ) : (
              <LoginForm cookies={cookies} />
            )}
          </div>
        </>
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
