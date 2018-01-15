import { combineReducers } from 'redux';
import providerReducer from './providerReducer';

export default combineReducers({
  provider: providerReducer,
});
