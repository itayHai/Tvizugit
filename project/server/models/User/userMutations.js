import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { addUser, updateUser } from "./userBL";
import { UserType, UserInputType } from "./userType";

const UserMutation = new GraphQLObjectType({
  name: "UserMutationType",
  fields: () => ({
    user: {
      type: UserType,
      args: {
        user: { type: new GraphQLNonNull(UserInputType) },
        id: { type: GraphQLString },
      },
      resolve: (root, { id, user }, context, ast) => {
        if (id) {
          return updateUser(id, user);
        }

        return addUser(user);
      },
    },
  }),
});

export default UserMutation;
