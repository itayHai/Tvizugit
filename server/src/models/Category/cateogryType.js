import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType,
} from "graphql";

const CategoryType = new GraphQLObjectType({
  name: "CategoryType",
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    engName: {
      type: GraphQLString,
    },
  }),
});

const CategoryInputType = new GraphQLInputObjectType({
  name: "CategoryInputType",
  description: "Input payload for creating category",
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    engName: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});

export { CategoryType, CategoryInputType };
