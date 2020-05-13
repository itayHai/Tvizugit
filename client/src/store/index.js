import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import classAction from "./classAction";
import user from "./user";

const rootReducer = combineReducers({
  classAction,
  user,
});

export default createStore(rootReducer, applyMiddleware(thunk));
