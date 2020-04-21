import { GraphQLObjectType } from "graphql";
import { UserMutations } from "./User";
import { ClassActionMutation } from "./ClassAction";
import CategoryMutation from "./Category/categoryMutation";

export default new GraphQLObjectType({
  name: "Mutations",
  fields: () => ({
    ClassActionMutation: {
      type: ClassActionMutation,
      resolve: () => true,
    },
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
