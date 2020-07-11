import { init, predict } from "./predication";
import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import { WinRateType } from "../models/ClassAction/WinRate/winRateType";

const PredicationQuery = new GraphQLObjectType({
  name: "PredicationQueryType",
  fields: () => ({
    predict: {
      type: WinRateType,
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