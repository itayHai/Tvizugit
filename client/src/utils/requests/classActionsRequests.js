import { gql } from "apollo-boost";

const getAll = gql`
{
    ClassActionQueries {
      classActions {
        id
        name
        description
        category{
          name
          engName
        }
        defendants
        messages{
          _id
          title
          date
          content
        }
        users {
          id
          name
        }
        status
        leadingUser {
          id
          name
        }
        openDate
        successChances
      }
    }
  }
`;
const updateClassActionServer = gql`
mutation ($classAction: ClassActionInputType!, $id: String) {
  ClassActionMutation {
    classAction(classAction: $classAction, id: $id) {
      id: id
      name: name
      status: status
    }
  }
}`;

export default {
  getAll,
  updateClassActionServer
};
