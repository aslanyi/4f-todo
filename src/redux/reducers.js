import { combineReducers } from 'redux';
import { user } from './user/reducers';
import { error } from './errors/reducers';
const rootReducer = combineReducers({ user, error });

export default rootReducer;
