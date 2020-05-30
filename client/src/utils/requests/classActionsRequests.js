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
        _id
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
const addClassAction = gql`
const REPORT = gql`
mutation reportClassAction($id: String!, $reportMessage: String!) {
  ClassActionMutation{
    reportClassAction(id:$id, reportMessage: $reportMessage) {
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
      reported
      reportMessage
      openDate
      successChances
      hashtags
    }
  }
}
`;

export default {
  updateClassActionServer,
  REPORT,
};
