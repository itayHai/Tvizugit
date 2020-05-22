import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
} from "graphql";

const LawyerType = new GraphQLObjectType({
  name: "Lawyer",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    expertise: { type: GraphQLString },
    email: { type: GraphQLString },
    address: { type: GraphQLString },
    phone: { type: GraphQLString },
    seniority: { type: GraphQLString },
    img: { type: GraphQLString },
    classactions: { type: GraphQLString },
  }),
});

const LawyerInputType = new GraphQLInputObjectType({
  name: "LawyerInputType",
  description: "Input payload for creating lawyer",
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    expertise: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    address: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: new GraphQLNonNull(GraphQLString) },
    seniority: { type: new GraphQLNonNull(GraphQLString) },
    img: { type: new GraphQLNonNull(GraphQLString) },
    classactions: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

export { LawyerType, LawyerInputType };
