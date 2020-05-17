import UserModel from "./userModel";

function getUser({ email, password }) {

  return UserModel.findOne({ email: email , password: password });
}

function addUser(userToAdd) {
  const newUser = new UserModel(userToAdd);
  return newUser.save();
}

function updateUser(id, userToUpdate) {
  return UserModel.findOneAndUpdate({ _id: id }, userToUpdate);
}

export { getUser, addUser, updateUser };
