import { GraphQLObjectType } from "graphql";
import { UserMutations } from "./User";
import { LawyerMutations } from "./Lawyer";
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
    LawyerMutations: {
      type: LawyerMutations,
      resolve: () => true,
    },
  }),
});
