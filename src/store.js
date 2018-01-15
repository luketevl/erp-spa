import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(
  promise(),
  thunkMiddleware,
  loggerMiddleware,
));

export default store;