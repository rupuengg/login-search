import { createStore, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import reducer from './reducers';

const store = createStore(reducer, {}, compose(applyMiddleware(reduxPromise, thunk, logger)));

export default store;