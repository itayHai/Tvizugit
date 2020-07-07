import { GraphQLObjectType } from "graphql";
import { UserMutations } from "./User";
import { LawyerMutations } from "./Lawyer";
import { ClassActionMutation } from "./ClassAction";
import { CategoryMutation } from "./Category";
import { UserRoleMutations } from "./UserRole";
import { WinRateMutations } from './ClassAction/WinRate'

export default new GraphQLObjectType({
  name: "Mutations",
  fields: () => ({
    UserRoleMutations: {
      type: UserRoleMutations,
      resolve: () => true,
    },
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
    WinRateMutations: {
      type: WinRateMutations,
      resolve: () => true,
    }
  }),
});
