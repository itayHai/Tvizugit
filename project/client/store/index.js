import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import classAction from "./classAction";
import user from "./user";
import lawyer from './lawyer'

const rootReducer = combineReducers({
  classAction,
  user,
  lawyer
});

export default createStore(rootReducer, applyMiddleware(thunk));
