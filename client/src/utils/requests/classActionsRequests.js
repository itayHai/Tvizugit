import { gql } from "apollo-boost";

const getAll = gql`
{
    ClassActionQueries {
      classActions {
        title
        id
        name
        description
        category{
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

export default {
  getAll,
};
