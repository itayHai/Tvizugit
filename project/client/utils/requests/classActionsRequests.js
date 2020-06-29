import {gql} from 'apollo-boost';

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
      defendants{
        name
        type{
          id
          name
        }
        theme{
          id
          name
        }
      }
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
        displayName
        }
        isWaiting
      }
      status
      leadingUser {
        id
        name
        displayName
      }
      representingLawyer{
        id
        name
      }
      openDate
      reasons{
        id
        name
      }
      type{
        id
        name
      }
      successChances
      hashtags
    }
  }
}
`;
const addClassAction = gql`
mutation ($classAction:ClassActionInputType!){
  ClassActionMutation{
    classAction(classAction:$classAction){
      id
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
        displayName
        }
        isWaiting
      }
      status
      leadingUser {
        id
        name
        displayName
      }
      reported
      reportMessage
    } 
  }
}
`;

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
      defendants{
        name
        type
        theme
      }
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
        displayName
        }
        isWaiting
      }
      status
      leadingUser {
        id
        name
      }
      representingLawyer{
        id
        name
      }
      reported
      reasons{
        id
      }
      type
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
        displayName
        }
        isWaiting
      }
      status
      leadingUser {
        id
        name
        displayName
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
const getAllClassActionTypes = gql`
{
  typeClassActionQueries{
      typesOfClassActions{
        id
        name
      }
    }
  }
  `;
const getAllClassActionReasons = gql`
  {
    classActionReasonQueries{
     classActionReasons{
       id
       name
     }
     
   }
 }
  `;
const getAllDefendantsTypes = gql`
  {
    defendantTypeQueries {
      defendantTypes {
        id
        name
      }
    }
  }
  `;
const getAllDefendantsThemes = gql`
  {
    defendantThemeQueries{
      defendantThemes{
       id
       name
     }
   }
 }
 
  `;

export default {
  updateClassActionServer,
  getAllClassActionTypes,
  getAllClassActionReasons,
  getAllDefendantsThemes,
  getAllDefendantsTypes,
  GET_REPORTED,
  addClassAction,
  REPORT,
  CANCEL_REPORT
};
