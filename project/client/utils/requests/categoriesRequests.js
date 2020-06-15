import { gql } from "apollo-boost";

const getAll = gql`
  {
    CategoryQueries {
      categories {
        id
        name
        engName
      }
    }
  }
`;

export default {
  getAll,
};
