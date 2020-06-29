import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql';

const typeOfClassActionType = new GraphQLObjectType({
  name: 'typeOfClassActionType',
  fields: () => ({
    id: {type: GraphQLString},
    idAI: {type: GraphQLInt},
    name: {type: GraphQLString}
  })
});

export {typeOfClassActionType};
