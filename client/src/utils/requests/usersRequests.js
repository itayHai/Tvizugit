import { gql } from "apollo-boost";

const addNewUser = gql`
mutation ($user: UserInputType!) {
    UserMutations {
      user(user: $user) {
        id
        name
        email
        displayName
        password
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
