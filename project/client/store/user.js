import client from '../utils/apolloService'
import { gql } from "apollo-boost";

export const CHANGE_REGISTER_USER = "CHANGE_REGISTER_USER";
export const CHANGE_LOGGED_USER = "CHANGE_LOGGED_USER";
export const SET_MODE = "SET_MODE";

export function LoginUser(user) {
  const GET_USER_BY_EMAIL_PASSWORD = gql`
  query ($email: String!, $password: String!) {
    UserQueries {
      user(email: $email, password: $password) {
        id
        name
        displayName
        email
        password
        role {
          id
          name
          engName
        }
      }
    }
  }
`;

  return (dispatch) => {
    client
      .query({
        query: GET_USER_BY_EMAIL_PASSWORD,
        variables: { email: user.email, password: user.password },
      })
      .then((result) => {
        if (result.data.UserQueries.user) {
          dispatch({
            type: CHANGE_LOGGED_USER,
            user: result.data.UserQueries.user,
          })
        }
        else {
          alert("שם משתמש או סיסמא שגויים")
          localStorage.setItem('localEmail', 'undefined');
          localStorage.setItem('localPassword', 'undefined');
        }
      }
      );
  };
}

export function changeLoggedInUser(user) {
  return {
    type: CHANGE_LOGGED_USER,
    user
  }
}

export function changeRegisterUser(user) {
  return {
    type: CHANGE_REGISTER_USER,
    user
  }
}

export function setMode(mode) {
  return {
    type: SET_MODE,
    mode
  }
}

const initialState = {

  mode: 'login',

  RegisterUser: {
    id: "",
    name: "",
    displayName: "",
    role: {
      id: "",
      engName: "",
      name: ""
    },
    email: "",
    password: "",
  },
 loggedInUser: { }
    // id: "5e9cae20a9c09c48d8be3776",
    // name: "Itay Haizler",
    // displayName: "איתי הייזלר",
    // email: "itay@gmail.com",
    // password: "123456",
    // role: {
    //   engName: "admin",
    //   id: "5ea43b9a7157be568022babd",
    //   name: "מנהל מערכת"
    // }
};
function userReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_REGISTER_USER: {
      return {
        ...state,
        RegisterUser: action.user,
      }
    }
    case CHANGE_LOGGED_USER: {
      localStorage.setItem('localEmail', action.user.email);
      localStorage.setItem('localPassword', action.user.password);
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