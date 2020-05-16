import { gql } from "apollo-boost";

const addNewUser = gql`
mutation ($user: UserInputType!) {
    UserMutations {
      user(user: $user) {
        _id
        name
        email
        displayName
        password
        role
      }
    }
  }
`;

const getUser = gql`
query($email:String!,$password:String!){
    UserQueries{
     user(email:$email,password:$password){
       _id
       displayName
     }
    }
 }
`;

export default {
    addNewUser,
    getUser,
};
