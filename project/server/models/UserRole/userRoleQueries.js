import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";
import { UserRoleType } from "./userRoleType";
import { getUserRole, getUserRoles } from "./userRoleBL";

const UserRoleQueries = new GraphQLObjectType({
  name: "UserRoleQueries",
  fields: () => ({
    userRole: {
      type: UserRoleType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve: (root, params) => {
        return getUserRole(params);
      },
    },
    userRoles: {
      type: new GraphQLList(UserRoleType),
      args: {},
      resolve: () => {
        return getUserRoles();
      },
    },
  }),
});

export default UserRoleQueries;
