import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { addLawyer } from "./lawyerBL";
import { LawyerType, LawyerInputType } from "./lawyerType";

const LawyerMutation = new GraphQLObjectType({
  name: "LawyerMutationType",
  fields: () => ({
    lawyer: {
      type: LawyerType,
      args: {
        lawyer: { type: new GraphQLNonNull(LawyerInputType) },
      },
      resolve: (root, { lawyer }, context, ast) => {
        return addLawyer(lawyer);
      },
    },
  }),
});

export default LawyerMutation;
