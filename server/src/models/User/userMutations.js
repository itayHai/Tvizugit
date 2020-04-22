import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { addUser } from "./userBL";
import { UserType, UserInputType } from "./userType";

const UserMutation = new GraphQLObjectType({
  name: "UserMutationType",
  fields: () => ({
    user: {
      type: UserType,
      args: {
        user: { type: new GraphQLNonNull(UserInputType) },
      },
      resolve: (root, { user }, context, ast) => {
        return addUser(user);
      },
    },
  }),
});

export default UserMutation;
