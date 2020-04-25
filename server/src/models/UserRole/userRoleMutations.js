import { GraphQLObjectType, GraphQLNonNull } from "graphql";
import { UserRoleType, UserRoleInputType } from "./userRoleType";
import { addUserRole } from "./userRoleBL";

const UserRoleMutations = new GraphQLObjectType({
  name: "UserRoleMutations",
  fields: () => ({
    userRole: {
      type: UserRoleType,
      args: {
        userRole: { type: new GraphQLNonNull(UserRoleInputType) },
      },
      resolve: (root, params) => {
        return addUserRole(params);
      },
    },
  }),
});

export default UserRoleMutations;
