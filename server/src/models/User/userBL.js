import UserModel from "./userModel";

function getUser({ id }) {
  return UserModel.findOne({ _id: id }).populate("role");
}

function addUser(userToAdd) {
  const newUser = new UserModel(userToAdd);
  return newUser.save();
}

function updateUser(id, userToUpdate) {
  return UserModel.findOneAndUpdate({ _id: id }, userToUpdate);
}

export { getUser, addUser, updateUser };
