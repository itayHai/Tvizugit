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

function getClassActionsByUser({ userId, limit }) {
  return ClassActionModel.find({ "users.user": userId })
    .limit(limit)
    .populate("category")
    .populate("leadingUser")
    .populate("users.user");
}

function getClassActions() {
  return ClassActionModel.find({})
    .populate("category")
    .populate("leadingUser")
    .populate("users.user");
}

function getClassActionsByParams({ name, hashtags, categories }) {
  if (!(name && hashtags && categories)) {
    return getClassActions();
  }
  let categoriesQuery = {};
  let hashtagsQuery = {};
  let nameQuery = {};

  if (categories.length !== 0) {
    categoriesQuery = { category: { $in: categories } };
  }
  if (hashtags.length !== 0) {
    hashtagsQuery = { hashtags: { $in: hashtags } };
  }
  if (name !== " ") {
    nameQuery = { name: { $regex: name, $options: "i" } };
  }

  return ClassActionModel.find({
    $and: [
      nameQuery,
      categoriesQuery,
      hashtagsQuery
    ]
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
  getClassActionsByUser,
};
