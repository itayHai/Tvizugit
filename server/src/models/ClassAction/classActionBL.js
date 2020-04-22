import ClassActionModel from "./classActionSchema";

function addClassAction(classActionToAdd) {
  const newClassAction = new ClassActionModel(classActionToAdd);
  return newClassAction.save();
}

function updateClassAction(id, classActionToAdd) {
  return ClassActionModel.findOneAndUpdate({ _id: id }, classActionToAdd)
    .populate("category")
    .populate("leadingUser")
    .populate("defendants");
}

function getClassAction({ id }) {
  return ClassActionModel.findOne({ _id: id })
    .populate("category")
    .populate("leadingUser")
    .populate("defendants");
}

function getAllClassActions() {
  return ClassActionModel.find({})
    .populate("category")
    .populate("leadingUser")
    .populate("defendants");
}

export {
  addClassAction,
  getClassAction,
  getAllClassActions,
  updateClassAction,
};
