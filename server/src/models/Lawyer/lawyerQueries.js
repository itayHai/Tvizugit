import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";
import { getLawyer } from "./lawyerBL";
import { LawyerType } from "./lawyerType";

const LawyerQueries = new GraphQLObjectType({
  name: "LawyerQueryType",
  fields: () => ({
    lawyer: {
      type: LawyerType,
      args: {
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: {type: GraphQLString},
      },
      resolve: (root, params, context, ast) => {
        return getLawyer(params);
      },
    },
  }),
});

export default LawyerQueries;
