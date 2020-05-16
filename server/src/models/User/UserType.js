import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
} from "graphql";

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    displayName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: GraphQLString },
  }),
});

const UserInputType = new GraphQLInputObjectType({
  name: "UserInputType",
  description: "Input payload for creating user",
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString), },
    displayName: { type: new GraphQLNonNull(GraphQLString), },
    email: { type: new GraphQLNonNull(GraphQLString), },
    password: { type: new GraphQLNonNull(GraphQLString), },
    role: { type: new GraphQLNonNull(GraphQLString), },
  }),
});

export { UserType, UserInputType };
