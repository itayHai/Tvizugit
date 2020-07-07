import client from '../utils/apolloService';
import gql from 'graphql-tag';

export const CHANGED_SORT = 'CHANGED_SORT';
export const UPDATE_CLASS_ACTIONS = 'UPDATE_CLASS_ACTIONS';
export const UPDATE_MESSAGES_ACTION = 'UPDATE_MESSAGES_ACTION';
export const CHANGE_CURR_ACTION = 'CHANGE_CURR_ACTION';
export const UPDATE_CLASS_ACTION = 'UPDATE_CLASS_ACTION';
export const DELETE_CLASS_ACTION = 'DELETE_CLASS_ACTION';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export function updateClassActions (classActions) {
  return {
    type: UPDATE_CLASS_ACTIONS,
    classActions
  };
}

export function changeFilter (filter = {name: '', categories: [], hashtags: []}) {
  return {
    type: CHANGE_FILTER,
    filter
  };
}

export function deleteClassAction (classActionId) {
  return {
    type: DELETE_CLASS_ACTION,
    classActionToRemove: {id: classActionId}
  };
}

export function changeCurAction (classAction) {
  return {
    type: CHANGE_CURR_ACTION,
    classAction
  };
}

export function updateClassAction (classAction) {
  return {
    type: UPDATE_CLASS_ACTION,
    classAction
  };
}
export function changeSort (sortBy) {
  return {
    type: CHANGED_SORT,
    payload: sortBy
  };
}
export function updateMessagesAction (classAction, newMessages) {
  return {
    type: UPDATE_MESSAGES_ACTION,
    classAction,
    newMessages
  };
}

const initialState = {
  sortBy: '',
  currClassAction: {},
  classActions: [],
  filter: {
    name: '',
    categories: [],
    hashtags: [],
    userId: ""
  }
};

const classActionReducer = (state = initialState, action) => {
  switch (action.type) {
  case CHANGED_SORT:
    return {
      ...state,
      sortBy: action.payload
    };
  case UPDATE_CLASS_ACTIONS:
    return {
      ...state,
      classActions: action.classActions
    };
  case DELETE_CLASS_ACTION:
    return {
      ...state,
      classActions: state.classActions.filter(
        cAction => cAction.id !== action.classActionToRemove.id
      )
    };
  case UPDATE_CLASS_ACTION:
    const newClassActions = state.classActions.map(cAction => {
      if (cAction.id === action.classAction.id) {
        return action.classAction;
      }

      return cAction;
    });


    return {
      ...state,
      classActions: newClassActions,
      currClassAction: action.classAction
    };

  case CHANGE_CURR_ACTION: {
    return {
      ...state,
      currClassAction: action.classAction
    };
  }
  case UPDATE_MESSAGES_ACTION: {
    const currClassAction = {...action.classAction};
    let newClassActions = [...state.classActions];

    currClassAction.messages = action.newMessages;
    newClassActions = newClassActions.map(cAction => {
      if (cAction.id === currClassAction.id) {
        return currClassAction;
      }

      return cAction;
    });

    return {
      ...state,
      classActions: newClassActions
    };
  }
  case CHANGE_FILTER: {
    return {
      ...state,
      filter: action.filter

    };
  }
  default:
    return state;
  }
};


export default classActionReducer;
