import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import middleware from './middleware';
import reducer from './reducers';

// Pass the Root Reducer to our createStore()
// function in order for the store to know
// what pieces of state it should have
const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
