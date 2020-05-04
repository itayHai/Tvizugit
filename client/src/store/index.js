import {combineReducers, createStore} from 'redux'
import classAction from './classAction'
import user from './user'

const rootReducer = combineReducers({
    classAction, user
});

export default createStore(rootReducer)