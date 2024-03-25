import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import counterReducer from './modules/counter';
import messageReducer from './modules/message';

const store = createStore(combineReducers({
  counter: counterReducer,
  message: messageReducer
}), composeWithDevTools(applyMiddleware(thunk)))

export default store;