import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
} from "graphql";
import { CategoryType, CategoryInputType } from "./cateogryType";
import { addCategory, addCategories } from "./categoryBL";

const CategoryMutation = new GraphQLObjectType({
  name: "CategoryMutationType",
  fields: () => ({
    category: {
      type: CategoryType,
      args: {
        name: {
          type: GraphQLString,
        },
        engName: {
          type: GraphQLString,
        },
      },
      resolve: async (root, params, context, ast) => {
        return await addCategory(params);
      },
    },
    categories: {
      type: new GraphQLList(CategoryType),
      args: {
        categoriesList: {
          type: new GraphQLNonNull(
            new GraphQLList(new GraphQLNonNull(CategoryInputType))
          ),
        },
      },
      resolve: async (root, { categoriesList }, context, ast) => {
        return await addCategories(categoriesList);
      },
    },
  }),
});

export default CategoryMutation;
