import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";
import { getUser } from "./userBL";
import { UserType } from "./userType";

const UserQueries = new GraphQLObjectType({
  name: "UserQueryType",
  fields: () => ({
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (root, params, context, ast) => {
        return getUser(params);
      },
    },
  }),
});

export default UserQueries;
