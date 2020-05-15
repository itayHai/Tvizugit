export const CHANGE_LOGGED_USER = "CHANGE_LOGGED_USER";
export const SET_MODE = "SET_MODE";

export function changeLoggedInUser(user) {
  return {
    type: CHANGE_LOGGED_USER,
    user,
  };
}

export function setMode(mode) {
  return {
    type: SET_MODE,
    mode
  }
}

const initialState = {
  
  mode: 'login',

  loggedInUser: {
    id: "",
    name: "",
    displayName: "" ,
    email: "",
    password: "",
    
    role: {
      id: "",
      engName: "",
      name: ""
    },
  },
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOGGED_USER: {
      return {
        ...state,
        loggedInUser: action.user,
      };
    }
    case SET_MODE:
      return {
        ...state,
        mode: action.mode
      }
    default: {
      return state;
    }
  }
}

export default userReducer;