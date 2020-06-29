import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql';

const ClassActionReasonType = new GraphQLObjectType({
  name: 'ClassActionReasonType',
  fields: () => ({
    id: {type: GraphQLString},
    idAI: {type: GraphQLInt},
    name: {type: GraphQLString}
  })
});

export {ClassActionReasonType};
