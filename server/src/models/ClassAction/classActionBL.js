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
    .populate("users.user");
}

function getClassAction({ id }) {
  return ClassActionModel.findOne({ _id: id })
    .populate("category")
    .populate("leadingUser")
    .populate("users.user");

}

function getClassActionsByParams({userId, limit}) {
  return userId
    ? ClassActionModel.find( {"users.user": userId}).limit(limit)
        .populate("category")
        .populate("leadingUser")
        .populate("users.user")
    : ClassActionModel.find({})
      .populate("category")
      .populate("leadingUser")
      .populate("users.user");

}

export {
  addClassAction,
  getClassAction,
  getClassActionsByParams,
  updateClassAction,
  deleteClassAction,
};
