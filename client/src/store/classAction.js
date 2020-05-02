export const REMOVE_MESSAGE_ACTION = "REMOVE_MESSAGE_ACTION";
export const ADD_MESSAGE_ACTION = "ADD_MESSAGE_ACTION";
export const CHANGED_SORT = "CHANGED_SORT";
export const UPDATE_CLASS_ACTIONS = "UPDATE_CLASS_ACTIONS";
export const CHANGE_CURR_ACTION = "CHANGE_CURR_ACTION";
export const UPDATE_CLASS_ACTION = "UPDATE_CLASS_ACTION";

export function updateClassActions(classActions) {
  return {
    type: UPDATE_CLASS_ACTIONS,
    classActions,
  };
}

export function changeCurAction(classAction) {
  return {
    type: CHANGE_CURR_ACTION,
    classAction,
  };
}
export function updateClassAction(classAction) {
  return {
    type: UPDATE_CLASS_ACTION,
    classAction,
  };
}
export function changeSort(sortBy) {
  return {
    type: CHANGED_SORT,
    payload: sortBy,
  };
}

export function removeMessageAction(classAction, message) {
  return {
    type: REMOVE_MESSAGE_ACTION,
    classAction,
    message,
  };
}
export function addMessageAction(message, title, classAction) {
  return {
    type: ADD_MESSAGE_ACTION,
    message,
    title,
    classAction,
  };
}

const initialState = {
  sortBy: "",
  currClassAction: {},
  classActions: [],
};

const classActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGED_SORT:
      console.log(action)
      return {
        ...state,
        sortBy: action.payload,
      };
    case UPDATE_CLASS_ACTIONS:
      return {
        ...state,
        classActions: action.classActions,
      };
    case UPDATE_CLASS_ACTION:
      const newClassActions = state.classActions.map((cAction) => {
        if (cAction.id === action.classAction.id) {
          return action.classAction;
        }
        return cAction;
      });
      return {
        ...state,
        classActions: newClassActions,
        currClassAction: action.classAction,
      };

    case CHANGE_CURR_ACTION: {
      return {
        ...state,
        currClassAction: action.classAction,
      };
    }
    case REMOVE_MESSAGE_ACTION: {
      const newClassActions = removeMessage(
        action.classAction,
        action.message,
        [...state.classActions]
      );
      return {
        ...state,
        classActions: newClassActions,
      };
    }
    case ADD_MESSAGE_ACTION: {
      const newClassActions = addMessage(
        action.message,
        action.title,
        action.classAction,
        [...state.classActions]
      );
      return {
        ...state,
        classActions: newClassActions,
      };
    }
    default:
      return state;
  }
};

const removeMessage = (currClassAction, message, classActions) => {
  currClassAction.messages = currClassAction.messages.filter((mes) => {
    return mes !== message;
  });
  classActions = classActions.map((cAction) => {
    if (cAction.id === currClassAction.id) {
      return currClassAction;
    }
    return cAction;
  });
  
  return classActions;
};

const addMessage = (message, title, classAction, classActions) => {
  var todayDate = new Date();
  const newMessage = {
    date: todayDate,
    title: title,
    content: message,
  };
  classAction.messages.push(newMessage);
  classActions = classActions.map((cAction) => {
    if (cAction.id === classAction.id) {
      return classAction;
    }
    return cAction;
  });
  return classActions;
};

export default classActionReducer;
