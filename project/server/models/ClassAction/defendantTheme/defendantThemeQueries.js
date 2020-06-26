import { GraphQLObjectType, GraphQLList } from "graphql";
import { DefendantThemeType } from "./defendantThemeType";
import { getDefendantThemes } from "./defendantThemeBL";

const defendantThemeQueries = new GraphQLObjectType({
  name: "defendantThemeQueries",
  fields: () => ({
    defendantThemes: {
      type: new GraphQLList(DefendantThemeType),
      args: {},
      resolve: () => {
        return getDefendantThemes();
      },
    },
  }),
});

export default defendantThemeQueries;
