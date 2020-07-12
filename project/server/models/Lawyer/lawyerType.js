import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInt
} from "graphql";
import { ClassActionInputType, ClassActionType } from "../ClassAction/classActionType";

const LawyerType = new GraphQLObjectType({
  name: "Lawyer",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    expertise: { type: new GraphQLList(GraphQLString) },
    email: { type: GraphQLString },
    address: { type: GraphQLString },
    phone: { type: GraphQLString },
    seniority: { type: GraphQLString },
    img: { type: GraphQLString },
    classactions: { type: new GraphQLList(ClassActionType)},
    idAI: { type: GraphQLInt }
  }),
});

const LawyerInputType = new GraphQLInputObjectType({
  name: "LawyerInputType",
  description: "Input payload for creating lawyer",
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    expertise: { type: new GraphQLList(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    address: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: new GraphQLNonNull(GraphQLString) }, 
    seniority: { type: new GraphQLNonNull(GraphQLString) },
    img: { type: new GraphQLNonNull(GraphQLString) },
    classactions: { type: new GraphQLList(ClassActionInputType), },
    idAI: { type: new GraphQLNonNull(GraphQLInt)}
  }),
});

export { LawyerType, LawyerInputType };
