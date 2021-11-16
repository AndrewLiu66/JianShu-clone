import { createStore, compose, applyMiddleware } from 'redux'
// reducer用来更新数据返回store
import reducer from './reducer'
import thunk from 'redux-thunk'

// get data and save data within store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
))

export default store;