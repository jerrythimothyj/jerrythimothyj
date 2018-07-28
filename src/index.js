/* eslint-disable no-underscore-dangle, no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import { App } from './containers';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducer';
import saga from './saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store with our reducer above and middleware
const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools),
);

// run the saga
sagaMiddleware.run(saga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
