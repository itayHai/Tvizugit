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

const GET_REPORTED = gql`
query getReportedClassActions {
  ClassActionQueries {
    reportedClassActions {
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
    } 
  }
}
`

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

const CANCEL_REPORT = gql`
mutation cancelReportClassAction($id: String!) {
  ClassActionMutation{
    cancelReportClassAction(id:$id) {
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
  GET_REPORTED,
  REPORT,
  CANCEL_REPORT,
};
