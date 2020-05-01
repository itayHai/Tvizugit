import { gql } from "apollo-boost";

        id
const updateClassActionServer = gql`
  mutation($classAction: ClassActionInputType!, $id: String) {
    ClassActionMutation {
      classAction(classAction: $classAction, id: $id) {
        id: id
        name: name
        status: status
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
