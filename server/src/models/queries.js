import { GraphQLObjectType } from "graphql";
import { UserQueries } from "./User";
import { ClassActionQueries } from "./ClassAction";
import { CategoryQueries } from "./Category";
import { UserRoleQueries } from "./UserRole";

export default new GraphQLObjectType({
  name: "Queries",
  fields: () => ({
    UserRoleQueries: {
      type: UserRoleQueries,
      resolve: () => true,
    },
    CategoryQueries: {
      type: CategoryQueries,
      resolve: () => true,
    },
    ClassActionQueries: {
      type: ClassActionQueries,
      resolve: () => true,
    },
    UserQueries: {
      type: UserQueries,
      resolve: () => true,
    },
  }),
});
