import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType,
} from "graphql";

const UserRoleType = new GraphQLObjectType({
  name: "UserRoleType",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    engName: {
      type: GraphQLString,
    },
  }),
});

const UserRoleInputType = new GraphQLInputObjectType({
  name: "UserRoleInputType",
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    engName: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});

export { UserRoleType, UserRoleInputType };
