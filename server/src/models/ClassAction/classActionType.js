import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLID,
} from "graphql";
import { GraphQLDate } from "graphql-compose";
import { UserType, UserInputType } from "../User/userType";
import { CategoryType } from "../Category/cateogryType";

const ClassActionType = new GraphQLObjectType({
  name: "ClassActionType",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    category: { type: CategoryType },
    status: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
    },
    defendants: {
      type: new GraphQLList(GraphQLString),
    },
    leadingUser: { type: UserType },
    representingLawyer: { type: UserType },
    openDate: { type: GraphQLDate },
    successChances: { type: GraphQLString },
  }),
});

const ClassActionInputType = new GraphQLInputObjectType({
  name: "ClassActionInputType",
  description: "Input payload for creating class action",
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    category: { type: new GraphQLNonNull(GraphQLString) },
    status: { type: GraphQLString },
    defendants: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(GraphQLString))
      ),
    },
    users :{
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(GraphQLString))
      ),
    },
    // massages :{
    //   type: new GraphQLNonNull(
    //     new GraphQLList(new GraphQLNonNull(GraphQLString))
    //   ),
    // },
    hashtags:{
      type: new GraphQLList(GraphQLString)
    },
    leadingUser: { type: new GraphQLNonNull(GraphQLString) },
    representingLawyer: { type: GraphQLString },
    openDate: { type: GraphQLDate },
    successChances: { type: GraphQLString },
  }),
});

export { ClassActionInputType, ClassActionType };
