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
      resolve: (root, params, context, ast) => {
        return addCategory(params);
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
      resolve: (root, { categoriesList }, context, ast) => {
        return addCategories(categoriesList);
      },
    },
  }),
});

export default CategoryMutation;
