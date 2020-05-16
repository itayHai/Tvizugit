import { gql } from "apollo-boost";

const updateClassActionServer = gql`
mutation ($classAction: ClassActionInputType!, $id: String) {
  ClassActionMutation {
    classAction(classAction: $classAction, id: $id) {
      id
      name
      description
      category{
        id
        name
        engName
      }
      defendants
      messages{
        id
        title
        date
        content
      }
      users {
        user{
        id
        name
        }
        isWaiting
      }
      status
      leadingUser {
        id
        name
      }
      openDate
      successChances
      hashtags
    }
  }
}
`;

export default {
  updateClassActionServer,
};
