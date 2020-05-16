import { gql } from "apollo-boost";

const updateClassActionServer = gql`
mutation ($classAction: ClassActionInputType!, $id: String) {
  ClassActionMutation {
    classAction(classAction: $classAction, id: $id) {
      id: id
      name: name
      status: status
      messages {
        id
        title
        date
        content
      }
    }
  }
}
`;

export default {
  updateClassActionServer,
};
