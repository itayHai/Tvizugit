import * as actionTypes from "./actions";

const initialState = {
  sortBy: "",
  classActions: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGED_SORT:
      return {
        ...state,
        sortBy: action.sortBy,
      };
    case actionTypes.UPDATE_CLASS_ACTIONS:

      return {
        ...state,
        classActions: action.classActions,
      };
    case actionTypes.REMOVE_MESSAGE_ACTION: {
      const newClassActions = removeMessage(action.classAction, action.message, state)
      return {
        ...state,
        classActions:
          newClassActions

      }
    }
    case actionTypes.ADD_MESSAGE_ACTION: {
      const newClassActions = addMessage(action.message, action.title, action.actionId, state)
      return {
        ...state,
        classActions:
          newClassActions
      }
    }
    default:
      return state;
  }

};

const removeMessage = (classAction, message, state) => {
  const currClassAction = { ...classAction };
  currClassAction.manMessages = currClassAction.manMessages.filter((mes) => { return mes !== message })
  let classActions = [...state.classActions];
  classActions = classActions.map((cAction) => {
    if (cAction.Id === currClassAction.Id) {
      return currClassAction;
    }
    return cAction;
  })
  return classActions;
}

const addMessage = (message, title, actionId, state) => {
  let classActions = [...state.classActions];
  let classActionToChange = classActions.find((cAction) => cAction.Id === actionId);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;
  const newMessage = {
    date: today,
    title: title,
    content: message
  }
  classActionToChange.manMessages.push(newMessage);
  classActions = classActions.map((cAction) => {
    if (cAction.Id === classActionToChange.Id) {
      return classActionToChange;
    }
    return cAction;
  })
  return classActions;
}
export default reducer;
