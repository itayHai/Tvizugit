import { GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';
import {WinRateType} from './winRateType';
import { getWinRate, getWinRates } from './winRateBL';

const WinRateQueries = new GraphQLObjectType({
    name: 'WinRateQueries',
    fields: () => ({
        winRate: {
            type: WinRateType,
            args: {
                id: {
                    type: GraphQLString,
                },
            },
            resolve: (root, params) => {
                return getWinRate(params.id);
            }
        },
        winRates: {
            type: new GraphQLList(WinRateType),
            args: {},
            resolve: () => {
                return getWinRates();
            }
        }
    })
});

export default WinRateQueries;
