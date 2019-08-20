import { combineReducers } from 'redux';
import * as reducers from './auth-reducer';

const rootReducer = combineReducers(reducers);

export default rootReducer;