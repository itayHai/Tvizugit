import Redux from 'redux'
import {combineReducers, createStore} from 'redux'
import classAction from './classAction'

const rootReducer = combineReducers({
    classAction
});

export default createStore(rootReducer)