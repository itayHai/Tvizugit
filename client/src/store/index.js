import {combineReducers, createStore} from 'redux'
import classAction from './classAction'
import user from './user'
import lawyer from './lawyer'

const rootReducer = combineReducers({
    classAction, user, lawyer
});

export default createStore(rootReducer)