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
      engName: "viewer",
      name: "מנהל מערכת"
    },
    email: "",
    password: "",
  },

  loggedInUser: {
    displayName: "עידו פרלמן",
    email: "idoperlman2@gmail.com",
    id: "5e9d8bc9d43a5108ecf17822",
    name: "Ido perlman",
    password: "Ido9101995",
    role: {
      engName: "plaintiff",
      id: "5ea43cd47157be568022babe",
      name: "תובע"
    }
  }
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