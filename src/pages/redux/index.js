import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import * as fn from './fn/reducers'
import { saveList } from './financing/financingReducer'

let store = createStore(
  combineReducers({ ...fn }, {saveList}),
  applyMiddleware(thunk)
)

export default store