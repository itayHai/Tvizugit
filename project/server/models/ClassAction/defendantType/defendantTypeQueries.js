import {GraphQLObjectType, GraphQLList} from 'graphql';
import {typeOfDefendantType} from './typeOfDefendantType';
import {getDefendantTypes} from './defendantTypeBL';

const defendantTypeQueries = new GraphQLObjectType({
  name: 'defendantTypeQueries',
  fields: () => ({
    defendantTypes: {
      type: new GraphQLList(typeOfDefendantType),
      args: {},
      resolve: () => {
        return getDefendantTypes();
      }
    }
  })
});

export default defendantTypeQueries;
