import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
  } from "graphql";

  const typeOfDefendantType = new GraphQLObjectType({
    name: "typeOfDefendantType",
    fields: () => ({
      id: {type: GraphQLString},
      idAI:{type: GraphQLInt},
      name: { type: GraphQLString }
    }),
  });

export { typeOfDefendantType };
