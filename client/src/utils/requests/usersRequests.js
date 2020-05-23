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
        role {
          id
          name
          engName
        }
      }
    }
  }
`;

export default {
    addNewUser,
};
