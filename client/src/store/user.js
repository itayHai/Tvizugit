export const CHANGE_LOGGED_USER = "CHANGE_LOGGED_USER";

export function changeLoggedInUser(user) {
  return {
    type: CHANGE_LOGGED_USER,
    user,
  };
}

// TODO: This only until evrything is connected to the server
const initialState = {
  loggedInUser: {
    name: "Itay Haizler",
    role: {
      engName: "admin",
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
    default: {
      return state;
    }
  }
}

export default userReducer;
