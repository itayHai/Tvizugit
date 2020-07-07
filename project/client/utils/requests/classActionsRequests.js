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
        _id
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
      winRate {
        id
        idAI
        name
      }
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

const DELETE_CLASS_ACTION_MUTATION = gql`
    mutation deleteClassAction($id: String!) {
      ClassActionMutation {
        deleteClassAction(id: $id) {
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
        _id
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
        _id
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
      type {
        idAI
        name
      }
      reportMessage
      openDate
      winRate {
        id
        idAI
        name
      }
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
        _id
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
      winRate {
        id
        idAI
        name
      }
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

const PREDICT = gql`
query ($id: String) {
  PredicationQuery {
    predict (id: $id) {
      id
      idAI
      name
    }
  }
}
`

export default {
  updateClassActionServer,
  getAllClassActionTypes,
  getAllClassActionReasons,
  getAllDefendantsThemes,
  getAllDefendantsTypes,
  GET_REPORTED,
  addClassAction,
  REPORT,
  CANCEL_REPORT,
  DELETE_CLASS_ACTION_MUTATION,
  PREDICT
};
