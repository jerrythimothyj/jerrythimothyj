/* eslint-disable no-underscore-dangle, no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';

import { App } from './containers';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducer';
import saga from './saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create a redux store with our reducer above and middleware
let middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    /* https://github.com/evgenyrodionov/redux-logger */
    collapsed: true,
    diff: false,
    duration: true
  });
  middlewares = [...middlewares, logger];
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...[...middlewares]))
);

// run the saga
sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
