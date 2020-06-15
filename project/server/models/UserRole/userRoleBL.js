import UserRoleModel from "./userRoleModel";

function getUserRole({ id }) {
  return UserRoleModel.findOne({ _id: id });
}

function getUserRoles() {
  return UserRoleModel.find({});
}

function addUserRole({ userRole }) {
  const newUserRole = new UserRoleModel(userRole);
  return newUserRole.save();
}

export { getUserRole, getUserRoles, addUserRole };
