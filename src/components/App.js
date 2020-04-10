import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

import Dashboard from './Dashboard';
import Header from './Header';
import LoadingBar from 'react-redux-loading';
import NewQuestion from './NewQuestion';

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
            <Header activeUser={activeUser} />
            {activeUser !== null && (
              <div>
                <Route path="/" exact component={Dashboard} />
                <Route path="/add" component={NewQuestion} />
              </div>
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
