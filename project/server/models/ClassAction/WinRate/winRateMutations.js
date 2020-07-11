import { GraphQLObjectType, GraphQLNonNull } from "graphql";
import { WinRateType, WinRateInputType } from "./winRateType";
import { addWinRate } from "./winRateBL";

const WinRateMutations = new GraphQLObjectType({
  name: "WinRateMutations",
  fields: () => ({
    winRate: {
      type: WinRateType,
      args: {
        winRate: { type: new GraphQLNonNull(WinRateInputType) },
      },
      resolve: (root, params) => {
        return addWinRate(params);
      },
    },
  }),
});

export default WinRateMutations;
