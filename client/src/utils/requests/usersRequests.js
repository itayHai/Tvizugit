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
        role
      }
    }
  }
`;

const getUser = gql`
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

export default {
    addNewUser,
    getUser,
};
