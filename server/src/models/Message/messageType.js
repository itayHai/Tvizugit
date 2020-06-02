import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInputObjectType
} from "graphql";

import { GraphQLDate } from "graphql-compose";


const MessageType = new GraphQLObjectType({
    name: "MessageType",
    fields: () => ({
        _id: { type: GraphQLString },
        title: {
            type: GraphQLString,
        },
        content: {
            type: GraphQLString,
        },
        date: {
            type: GraphQLDate
        },
    }),
});

const MessageInputType = new GraphQLInputObjectType({
    name: "MessageInputType",
    description: "Input payload for creating Message",
    fields: () => ({
        title: {
            type: new GraphQLNonNull(GraphQLString),
        },
        content: {
            type: new GraphQLNonNull(GraphQLString),
        },
        date: {
            type: new GraphQLNonNull(GraphQLDate)
        },
    }),
});

export { MessageType, MessageInputType };
