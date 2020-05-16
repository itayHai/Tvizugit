import ClassActionModel from "./classActionModel";

function addClassAction(classActionToAdd) {
  const newClassAction = new ClassActionModel(classActionToAdd);
  return newClassAction.save();
}

function deleteClassAction({ id }) {
  return ClassActionModel.deleteOne({ _id: id });
}

function updateClassAction(id, classActionToAdd) {
  return ClassActionModel.findOneAndUpdate({ _id: id }, classActionToAdd, { new: true })
    .populate("category")
    .populate("leadingUser")
    .populate("users");
}

function getClassAction({ id }) {
  return ClassActionModel.findOne({ _id: id })
    .populate("category")
    .populate("leadingUser")
    .populate("users");
}

function getClassActionsByParams({userId, limit}) {
  return userId
    ? ClassActionModel.find( {"users": userId}).limit(limit)
        .populate("category")
        .populate("leadingUser")
        .populate("users")
    : ClassActionModel.find({})
      .populate("category")
      .populate("leadingUser")
      .populate("users");
}

export {
  addClassAction,
  getClassAction,
  getClassActionsByParams,
  updateClassAction,
  deleteClassAction,
};
