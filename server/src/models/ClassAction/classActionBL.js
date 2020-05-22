import ClassActionModel from "./classActionModel";

function addClassAction(classActionToAdd) {
  const newClassAction = new ClassActionModel(classActionToAdd);
  return newClassAction.save();
}

function deleteClassAction({ id }) {
  return ClassActionModel.deleteOne({ _id: id });
}

function updateClassAction(id, classActionToAdd) {
  return ClassActionModel.findOneAndUpdate({ _id: id }, classActionToAdd, {
    new: true,
  })
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

function getClassActionsByUser({ UserId, limit }) {
  return ClassActionModel.find({ users: UserId })
    .limit(limit)
    .populate("category")
    .populate("leadingUser")
    .populate("users");
}

function getClassActions() {
  return ClassActionModel.find({})
    .populate("category")
    .populate("leadingUser")
    .populate("users");
}

function getClassActionsByParams({
  name,
  hashtags,
  categories,
}) {
 
  if(name === undefined && hashtags === undefined && categories === undefined)
  {
    return getClassActions();
  }


  if (name === " ")  {
    return ClassActionModel.find({
      $or: [
        { category: { $in: categories } },
        { hashtags: { $elemMatch: { hashtags } } },
      ],
    })
      .populate("category")
      .populate("leadingUser")
      .populate("users");
  }

  return ClassActionModel.find({
    ? ClassActionModel.find( {"users.user": userId}).limit(limit)
        .limit(limit) 
        .populate("category")
        .populate("leadingUser")
        .populate("users.user")
    : ClassActionModel.find({
        $or: [
          { name: { $regex: name, $options: "i" } },
          { category: { $in: categories } },
          { hashtags: { $elemMatch: { hashtags } } },
        ],
      })
        .populate("category")
        .populate("leadingUser")
      .populate("users.user");

}

export {
  addClassAction,
  getClassActions,
  getClassAction,
  getClassActionsByParams,
  updateClassAction,
  deleteClassAction,
  getClassActionsByUser
};
