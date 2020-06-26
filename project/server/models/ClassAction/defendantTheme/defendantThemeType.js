import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql';

const DefendantThemeType = new GraphQLObjectType({
  name: 'DefendantThemeType',
  fields: () => ({
    id: {type: GraphQLString},
    idAI: {type: GraphQLInt},
    name: {type: GraphQLString}
  })
});

export {DefendantThemeType};
