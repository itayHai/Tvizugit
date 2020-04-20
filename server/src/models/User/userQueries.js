import { GraphQLObjectType, GraphQLString } from "graphql";
import { getUser } from "./userBL";
import { UserType } from "./userType";

const UserQueries = new GraphQLObjectType({
  name: "UserQueryType",
  fields: () => ({
    user: {
      type: UserType,
      args: {},
      resolve: async (root, params, context, ast) => {
        return await getUser(args);
      },
    },
  }),
});

export default UserQueries;
