import { gql } from "apollo-boost";

const addNewLawyer = gql`
mutation ($lawyer: LawyerInputType!) {
  LawyerMutations {
      lawyer(lawyer: $lawyer) {
        id
        name
        description
        expertise
        email
        address
        phone
        seniority
        img
        classactions
      }
    }
  }
`;

const getLawyer = gql`
query($email:String!){
  LawyerQueries{
    lawyer(email:$email){
      id
      name
      description
      expertise
      email
      address 
      phone
      seniority
      img
      classactions
    }
  }
}
`;

export default {
    addNewLawyer,
    getLawyer,
};