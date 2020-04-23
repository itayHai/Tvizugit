import * as actionTypes from "./actions";

const initialState = {
  sortBy: "",
  currClassAction: {},
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
    case actionTypes.UPDATE_CLASS_ACTION:
      const newClassActions = [...state.classActions].map((cAction) => {
        if (cAction.Id === action.classAction.Id) {
          return action.classAction;
        }
        return cAction;
      })
      return {
        ...state,
        classActions: newClassActions,
        currClassAction: action.classAction,
      };
    case actionTypes.REMOVE_MESSAGE_ACTION: {
      const newClassActions = removeMessage(action.classAction, action.message, [...state.classActions])
      return {
        ...state,
        classActions:
          newClassActions

      }
    }
    case actionTypes.ADD_MESSAGE_ACTION: {
      const newClassActions = addMessage(action.message, action.title, action.classAction, [...state.classActions])
      return {
        ...state,
        classActions:
          newClassActions
      }
    }
    case actionTypes.CHANGE_CURR_ACTION: {
      return {
        ...state,
        currClassAction:
          action.classAction
      }
    }
    default:
      return state;
  }

};

const removeMessage = (currClassAction, message, classActions) => {
  currClassAction.manMessages = currClassAction.manMessages.filter((mes) => { return mes !== message })
  classActions = classActions.map((cAction) => {
    if (cAction.Id === currClassAction.Id) {
      return currClassAction;
    }
    return cAction;
  })
  return classActions;
}

const addMessage = (message, title, classAction, classActions) => {
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
  classAction.manMessages.push(newMessage);
  classActions = classActions.map((cAction) => {
    if (cAction.Id === classAction.Id) {
      return classAction;
    }
    return cAction;
  })
  return classActions;
}
export default reducer;
