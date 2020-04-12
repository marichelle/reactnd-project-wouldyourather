import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import middleware from './middleware';
import reducer from './reducers';

import './index.css';

// Pass the Root Reducer to our createStore()
// function in order for the store to know
// what pieces of state it should have
const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
);
