import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from "graphql";
import { getLawyer, getAllLawyers } from "./lawyerBL";
import { LawyerType } from "./lawyerType";

const LawyerQueries = new GraphQLObjectType({
  name: "LawyerQueryType",
  fields: () => ({
    lawyer: {
      type: LawyerType,
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: {type: GraphQLString},
      },
      resolve: (root, params, context, ast) => {
        return getLawyer(params);
      },
    },
    lawyers: {
      type: new GraphQLList(LawyerType),
      args: {},
      resolve: (root, params, context, ast) => {
        return getAllLawyers();
      },
    }
  }),
});

export default LawyerQueries;
