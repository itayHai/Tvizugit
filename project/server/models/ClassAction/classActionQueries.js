import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from "graphql";
import { ClassActionType } from "./classActionType";
import { getClassAction, getClassActionsByParams, getClassActions, getClassActionsByUser, getReportedClassActions } from "./classActionBL";

const ClassActionQueries = new GraphQLObjectType({
  name: "ClassActionQueryType",
  fields: () => ({
    classAction: {
      type: ClassActionType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (root, params, context, ast) => {
        return getClassAction(params);
      },
    },
    classActions: {
      type: new GraphQLList(ClassActionType),
      args: {
        name: {
          type: GraphQLString,
        },
        categories: {
          type: GraphQLList(GraphQLString),
        },
        hashtags: {
          type: GraphQLList(GraphQLString),
        },
        userId: {
          type: GraphQLString,
        },
        limit: {
          type: GraphQLInt,
        },
      },
      resolve: (parentValue, params) => {

        if (params.userId) {
          return getClassActionsByUser(params);
        } else return getClassActionsByParams(params);
      },
    },
    reportedClassActions: {
      type: new GraphQLList(ClassActionType),
      args: {},
      resolve: (parentValue, params) => {
        return getReportedClassActions();
      },
    },
    count: {
      type: GraphQLInt,
      args: {
        name: {
          type: GraphQLString,
        },
        userId: {
          type: GraphQLString,
        },
        limit: {
          type: GraphQLInt,
        },
      },
      resolve: async (parentValue, params) => {
        const data = await getClassActionsByParams(params);

        return data.length;
      },
    },
  }),
});

export default ClassActionQueries;
