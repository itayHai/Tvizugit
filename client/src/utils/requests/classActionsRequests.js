import { gql } from "apollo-boost";

const getAll = gql`
  {
    ClassActionQueries {
      classActions {
        title
        description
        category {
          engName
          name
        }
        status
        openDate
        successChances
      }
    }
  }
`;

export default {
    getAll,
};
