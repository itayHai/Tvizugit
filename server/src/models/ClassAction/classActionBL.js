import ClassActionModel from "./classActionModel";
import { addClassActionToLawyer, deleteClassActionToLawyer } from '../Lawyer/lawyerBL';

function addClassAction(classActionToAdd) {
  classActionToAdd.reported = false;
  const newClassAction = new ClassActionModel(classActionToAdd);
  return newClassAction.save();
}

function deleteClassAction({ id }) {
  return ClassActionModel.deleteOne({ _id: id });
}

function updateClassAction(id, classActionToAdd) {
  if (classActionToAdd.representingLawyer) {
    ClassActionModel.findOne({
      _id: id, $or: [{ representingLawyer: { $exists: false } },
      { representingLawyer: { $ne: classActionToAdd.representingLawyer } }]
    })
      .populate("category")
      .populate("leadingUser")
      .populate("users.user")
      .populate("representingLawyer")
      .then(classAction => {
        addClassActionToLawyer(classActionToAdd.representingLawyer, classAction.id);
        if (classAction.representingLawyer) {
          deleteClassActionToLawyer(classAction.representingLawyer._id, classAction.id);
        }
        return ClassActionModel.findOneAndUpdate({ _id: id }, classActionToAdd, {
          new: true,
        })
          .populate("category")
          .populate("leadingUser")
          .populate("users.user")
          .populate("representingLawyer");
      })
      .catch(err => {
        console.log(err)
      });
  // } else {
    }
    return ClassActionModel.findOneAndUpdate({ _id: id }, classActionToAdd, {
      new: true,
    })
      .populate("category")
      .populate("leadingUser")
      .populate("users.user")
      .populate("representingLawyer");
  // }
}

function reportClassAction({ id, reportMessage }) {
  return ClassActionModel.findOneAndUpdate(
    { _id: id },
    { reportMessage: reportMessage, reported: true },
    { new: true }
  )
    .populate("category")
    .populate("leadingUser")
    .populate("users.user")
    .populate("representingLawyer");

}

function cancelReportClassAction({ id }) {
  return ClassActionModel.findOneAndUpdate(
    { _id: id },
    { reportMessage: "", reported: false },
    { new: true }
  )
    .populate("category")
    .populate("leadingUser")
    .populate("users.user")
    .populate("representingLawyer");

}

function getClassAction({ id }) {
  return ClassActionModel.findOne({ _id: id })
    .populate("category")
    .populate("leadingUser")
    .populate("users.user")
    .populate("representingLawyer");

}

function getClassActionsByUser({ userId, limit }) {
  return ClassActionModel.find({ "users.user": userId })
    .limit(limit)
    .populate("category")
    .populate("leadingUser")
    .populate("users.user")
    .populate("representingLawyer");

}

function getReportedClassActions() {
  return ClassActionModel.find({ reported: true })
    .populate("category")
    .populate("leadingUser")
    .populate("users.user")
    .populate("representingLawyer");

}

function getClassActions(limit) {
  return ClassActionModel.find({})
    .limit(limit)
    .populate("category")
    .populate("leadingUser")
    .populate("users.user")
    .populate("representingLawyer");

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
    .populate("users.user")
    .populate("representingLawyer");

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
