import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { addLawyer, updateLawyer } from "./lawyerBL";
import { LawyerType, LawyerInputType } from "./lawyerType";

const LawyerMutations = new GraphQLObjectType({
  name: "LawyerMutationType",
  fields: () => ({
    lawyer: {
      type: LawyerType,
      args: {
        id: { type: GraphQLString },  
        lawyer: { type: new GraphQLNonNull(LawyerInputType) },
      },
      resolve: (root, { id, lawyer }, context, ast) => {
        if (id) {
          return updateLawyer(id, lawyer);
        } else {
          return addLawyer(lawyer);
        }
      },
    },
  }),
});

export default LawyerMutations;
