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
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    category: { type: CategoryType },
    status: { type: GraphQLString },
    defendants: {
      type: new GraphQLList(UserType),
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
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    category: { type: new GraphQLNonNull(GraphQLString) },
    status: { type: GraphQLString },
    defendants: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(GraphQLString))
      ),
    },
    leadingUser: { type: new GraphQLNonNull(GraphQLString) },
    representingLawyer: { type: UserInputType },
    openDate: { type: GraphQLDate },
    successChances: { type: GraphQLString },
  }),
});

export { ClassActionInputType, ClassActionType };
