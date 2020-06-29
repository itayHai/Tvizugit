import { init } from "./predication";
import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

const PredicationQuery = new GraphQLObjectType({
  name: "PredicationQueryType",
  fields: () => ({
    predict: {
      type: GraphQLInt,
      args: {
        id: { type: GraphQLString }
      },
      resolve: async (root, params, context, ast) => {
        // const num = await init(params.id);
        // return num;
        return predict(params.id);
      },
    },
  }),
});

export default PredicationQuery;