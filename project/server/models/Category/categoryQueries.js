import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";
import { CategoryType } from "./cateogryType";
import { getCategory, getAllCategories } from "./categoryBL";

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
    categories: {
      type: new GraphQLList(CategoryType),
      args: {},
      resolve: (root, params, context, ast) => {
        return getAllCategories();
      },
    },
  }),
});

export default CategoryQueries;
