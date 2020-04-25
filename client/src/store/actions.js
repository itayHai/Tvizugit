export const CHANGED_SORT = 'CHANGED_SORT';
export const UPDATE_CLASS_ACTIONS = 'UPDATE_CLASS_ACTIONS';
export const REMOVE_MESSAGE_ACTION = 'REMOVE_MESSAGE_ACTION';
export const ADD_MESSAGE_ACTION = 'ADD_MESSAGE_ACTION';
export const CHANGE_CURR_ACTION = 'CHANGE_CURR_ACTION';
export const UPDATE_CLASS_ACTION = 'UPDATE_CLASS_ACTION';

export function changeSort(sortBy){
    return {
        type: CHANGED_SORT,
        sortBy
    }
}
export function updateClassActions(classActions){
    return {
        type: UPDATE_CLASS_ACTIONS,
        classActions
    }
}
export function removeMessageAction(classAction, message){
    return {
        type: REMOVE_MESSAGE_ACTION,
        classAction,
        message
    }
}
export function addMessageAction(message, title, classAction){
    return {
        type: ADD_MESSAGE_ACTION,
        message,
        title,
        classAction
    }
}
export function changeCurAction(classAction){
    return {
        type: CHANGE_CURR_ACTION,
        classAction
    }
}
export function updateClassAction(classAction){
    return {
        type: UPDATE_CLASS_ACTION,
        classAction
    }
}