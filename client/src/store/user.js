 import client from '../utils/apolloService'
 import { gql } from "apollo-boost";

export const CHANGE_REGISTER_USER = "CHANGE_REGISTER_USER";
export const CHANGE_LOGGED_USER = "CHANGE_LOGGED_USER";
export const SET_MODE = "SET_MODE";

export function LoginUser(user) {
  const GET_USER_BY_EMAIL_PASSWORD = gql`
  query($email:String!,$password:String!){
    UserQueries{
     user(email:$email,password:$password){
      id
      name
      displayName
      email
      password
      role
     }
    }
 }
`;

return {
  type: CHANGE_LOGGED_USER,
  user
}

  // return (dispatch) => {
  //   client
  //     .query({
  //       query: GET_USER_BY_EMAIL_PASSWORD,
  //       // Any hard coded existing id for now
  //       variables: { email: user.email , password: user.password },
  //     })
  //     .then((result) =>
  //       dispatch({
  //         type: CHANGE_LOGGED_USER,
  //         user: result.UserQueries.user,
  //       })
  //     );
  // };
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

// TODO: This only until evrything is connected to the server
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
    id: "",//"5ea9e2c7d34cb906dcfaf28d",
    name: "",//"Itay Haizler",
    displayName: "",//"איתי הייזלר",
    role: {
      id: "",//"5ea43b9a7157be568022babd",
      engName: "",//"viewer",
      name: ""//"מנהל מערכת"
    },
    email: "",//"itay@gmail.com",
    password: "",//"123456",
  },
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