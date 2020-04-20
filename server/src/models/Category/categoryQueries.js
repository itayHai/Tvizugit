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
        name: { type: GraphQLString },
      },
      resolve: async (root, { name, id }, context, ast) => {
        if (id) {
          return await getCategory(id);
        } else if (name) {
          return await searchCategory(name);
        }

        throw new Error("invalid Params");
      },
    },
  }),
});

export default CategoryQueries;
