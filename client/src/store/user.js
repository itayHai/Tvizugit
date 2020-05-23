 import client from '../utils/apolloService'
 import { gql } from "apollo-boost";

export const CHANGE_REGISTER_USER = "CHANGE_REGISTER_USER";
export const CHANGE_LOGGED_USER = "CHANGE_LOGGED_USER";
export const SET_MODE = "SET_MODE";

// export function addNewUser(user) {
//   const ADD_NEW_USER = gql`
//   mutation ($user: UserInputType!) {
//     UserMutations {
//       user(user: $user) {
//         id
//         name
//         email
//         displayName
//         password
//         role
//       }
//     }
//   }
//   `;

//   return (dispatch) => {
//     client
//       .mutate({
//         mutation: ADD_NEW_USER,
//         // Any hard coded existing id for now
//         variables: { user: user },
//       })
//       .then((result) =>{
//         {console.log(result)}
//         dispatch({
//           type: CHANGE_LOGGED_USER,
//           user: result.data.UserQueries.user,
//         })}
//       );
//   };
// }

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

  return (dispatch) => {
    client
      .query({
        query: GET_USER_BY_EMAIL_PASSWORD,
        variables: { email: user.email , password: user.password },
      })
      .then((result) =>{
        if (result.data.UserQueries.user) {
        dispatch({
            type: CHANGE_LOGGED_USER,
            user: result.data.UserQueries.user,          
        })}
      else{
        dispatch({
          type: CHANGE_LOGGED_USER,
          user: {},
      })
        alert("שם משתמש או סיסמא שגויים")
      }}
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

  loggedInUser: {}
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