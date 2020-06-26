import {GraphQLObjectType, GraphQLString, GraphQLList} from 'graphql';
import {ClassActionReasonType} from './classActionReasonType';
import {getClassActionReasons} from './classActionReasonBL';

const classActionReasonQueries = new GraphQLObjectType({
  name: 'classActionReasonQueries',
  fields: () => ({
    classActionReasons: {
      type: new GraphQLList(ClassActionReasonType),
      args: {},
      resolve: () => {
        return getClassActionReasons();
      }
    }
  })
});

export default classActionReasonQueries;
