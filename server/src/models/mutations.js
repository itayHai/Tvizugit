import { UserMutations } from "./User";
import { GraphQLObjectType } from "graphql";
import CategoryMutation from "./Category/categoryMutation";

export default new GraphQLObjectType({
  name: "Mutations",
  fields: () => ({
    CategoryMutation: {
      type: CategoryMutation,
      resolve: () => true,
    },
    UserMutations: {
      type: UserMutations,
      resolve: () => true,
    },
  }),
});
