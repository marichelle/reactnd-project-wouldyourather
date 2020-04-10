import React from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

import Dashboard from './Dashboard';
import Header from './Header';
import LoadingBar from 'react-redux-loading';
import NewQuestion from './NewQuestion';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { activeUser } = this.props;

    return (
      <div>
        <LoadingBar />
        <Header activeUser={activeUser} />
        <NewQuestion />
        <Dashboard />
      </div>
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
