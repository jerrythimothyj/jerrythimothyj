// import log from 'loglevel';
// import { createStore, applyMiddleware } from 'redux';
// import { routerMiddleware } from 'react-router-redux';
// import createSagaMiddleware from 'redux-saga';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
// import { createLogger } from 'redux-logger';
// import reducer from './reducer';
// import saga from './saga';

// log.setDefaultLevel(log.levels.DEBUG);

// // create the saga middleware
// const sagaMiddleware = createSagaMiddleware();

// let middlewares = [sagaMiddleware];
// if (process.env.NODE_ENV === 'development') {
//   const logger = createLogger({ collapsed: true, diff: false, duration: true });
//   middlewares = [...middlewares, logger];
// }

// export const configureStore = (history) => createStore(
//     (state , action ) => reducer
// )
