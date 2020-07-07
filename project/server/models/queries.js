import {GraphQLObjectType} from 'graphql';
import {UserQueries} from './User';
import {LawyerQueries} from './Lawyer';
import {ClassActionQueries} from './ClassAction';
import {CategoryQueries} from './Category';
import {UserRoleQueries} from './UserRole';
import {classActionReasonQueries} from './ClassAction/Reason';
import {typeClassActionQueries} from './ClassAction/Type';
import {defendantTypeQueries} from './ClassAction/defendantType';
import {defendantThemeQueries} from './ClassAction/defendantTheme';
import PredicationQuery from '../utils/PredicationQuery'
import PredictionQuery from '../utils/PredicationQuery';

export default new GraphQLObjectType({
  name: 'Queries',
  fields: () => ({
    UserRoleQueries: {
      type: UserRoleQueries,
      resolve: () => true
    },
    CategoryQueries: {
      type: CategoryQueries,
      resolve: () => true
    },
    ClassActionQueries: {
      type: ClassActionQueries,
      resolve: () => true
    },
    typeClassActionQueries: {
      type: typeClassActionQueries,
      resolve: () => true
    },
    defendantTypeQueries: {
      type: defendantTypeQueries,
      resolve: () => true
    },
    defendantThemeQueries: {
      type: defendantThemeQueries,
      resolve: () => true
    },
    UserQueries: {
      type: UserQueries,
      resolve: () => true
    },
    LawyerQueries: {
      type: LawyerQueries,
      resolve: () => true
    },
    classActionReasonQueries: {
      type: classActionReasonQueries,
      resolve: () => true
    },
    PredicationQuery: {
      type: PredictionQuery,
      resolve: () => true
    }
  })
});
