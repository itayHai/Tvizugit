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

const getAllLawyers = gql`
{
  LawyerQueries {
    lawyers {
      id
      name
      description
      expertise
      email
      address
      phone
      seniority
      img
      classactions {    		 
          id
					name
          description
          status
        
      }
    }
  }
}
`;

export default {
    addNewLawyer,
    getLawyer,
    getAllLawyers,
};