import {GraphQLObjectType, GraphQLList} from 'graphql';
import {typeOfClassActionType} from './typeClassActionType';
import {getTypesOfClassAction} from './typeClassActionBL';

const typeOfClassActionQueries = new GraphQLObjectType({
  name: 'typeOfClassActionQueries',
  fields: () => ({
    typesOfClassActions: {
      type: new GraphQLList(typeOfClassActionType),
      args: {},
      resolve: () => {
        return getTypesOfClassAction();
      }
    }
  })
});

export default typeOfClassActionQueries;
