import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLInputObjectType,
    GraphQLNonNull
} from 'graphql';

const WinRateType = new GraphQLObjectType({
    name: 'WinRateType',
    fields: () => ({
        id: { type: GraphQLString },
        idAI: { type: GraphQLInt },
        name: { type: GraphQLString }
    })
});

const WinRateInputType = new GraphQLInputObjectType({
    name: "WinRateInputType",
    fields: () => ({
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        idAI: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    }),
});

export { WinRateType, WinRateInputType };
