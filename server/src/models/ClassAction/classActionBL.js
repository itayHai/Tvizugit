import ClassActionModel from "./classActionModel";

function addClassAction(classActionToAdd) {
  classActionToAdd.reported = false;
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

function reportClassAction({ id, reportMessage }) {
  return ClassActionModel.findOneAndUpdate(
    { _id: id },
    { reportMessage: reportMessage, reported: true },
    { new: true }
  )
    .populate("category")
    .populate("leadingUser")
    .populate("users.user");
}

function cancelReportClassAction({ id }) {
  return ClassActionModel.findOneAndUpdate(
    { _id: id },
    { reportMessage: "", reported: false },
    { new: true }
  )
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

function getReportedClassActions() {
  return ClassActionModel.find({ reported: true })
    .populate("category")
    .populate("leadingUser")
    .populate("users.user");
}

function getClassActions(limit) {
  return ClassActionModel.find({})
    .limit(limit)
    .populate("category")
    .populate("leadingUser")
    .populate("users.user");
}

function getClassActionsByParams({ name, hashtags, categories, limit }) {
  if (!(name && hashtags && categories)) {
    return getClassActions(limit);
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
    $and: [nameQuery, categoriesQuery, hashtagsQuery],
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
  reportClassAction,
  getClassActionsByUser,
  getReportedClassActions,
  cancelReportClassAction,
};
