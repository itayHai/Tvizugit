import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { ClassActionType, ClassActionInputType } from "./classActionType";
import { addClassAction, updateClassAction } from "./classActionBL";

const ClassActionMutation = new GraphQLObjectType({
  name: "ClassActionMutationType",
  fields: () => ({
    classAction: {
      type: ClassActionType,
      args: {
        id: { type: GraphQLString },
        classAction: { type: new GraphQLNonNull(ClassActionInputType) },
      },
      resolve: (root, { id, classAction }, context, ast) => {
        if (id) {
          return updateClassAction(id, classAction);
        } else {
          return addClassAction(classAction);
        }
      },
    },
  }),
});

export default ClassActionMutation;
