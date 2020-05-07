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

// TODO: This only until evrything is connected to the server
const initialState = {
  //  loggedInUser: {
  // },  
  loggedInUser: {
    id: "5ea9e2c7d34cb906dcfaf28d",
    name: "Itay Haizler",
    displayName: "איתי הייזלר",
    role: {
      id: "5ea43b9a7157be568022babd",
      engName: "viewer",
      name: "מנהל מערכת"
    },
    email: "itay@gmail.com",
    password: "123456"
  },  
  mode: 'login'
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
        mode: action.mode
      }
    default: {
      return state;
    }
  }
}

export default userReducer;