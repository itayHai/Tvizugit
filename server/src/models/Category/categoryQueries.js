import { GraphQLObjectType, GraphQLString } from "graphql";
import { CategoryType } from "./cateogryType";
import { getCategory, searchCategory } from "./categoryBL";

const CategoryQueries = new GraphQLObjectType({
  name: "CategoryQueryType",
  fields: () => ({
    category: {
      type: CategoryType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (root, params, context, ast) => {
        return getCategory(params);

        throw new Error("invalid Params");
      },
    },
  }),
});

export default CategoryQueries;
