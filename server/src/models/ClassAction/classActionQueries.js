import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList,
} from "graphql";
import { ClassActionType } from "./classActionType";
import { getClassAction, getAllClassActions } from "./classActionBL";

const ClassActionQueries = new GraphQLObjectType({
  name: "ClassActionQueryType",
  fields: () => ({
    classAction: {
      type: ClassActionType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (root, params, context, ast) => {
        if(params){
          getClassActionByParams(params);
          console.log(params)
        }
        return getClassAction(params);
      },
    },
    classActions: {
      type: new GraphQLList(ClassActionType),
      args: {
        topic: {
          type: GraphQLString,
        },
      },
      resolve: (parentValue, { topic }) => {
        return getAllClassActions();
      },
    },
  }),
});

export default ClassActionQueries;
