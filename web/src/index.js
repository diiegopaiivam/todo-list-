import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './includes/bootstrap';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
//middlewares
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import rootRedux from './Main/reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(thunk, multi, promise)(createStore)(rootRedux, devTools);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

