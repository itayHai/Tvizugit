import UserModel from "./userSchema";

function getUser({ id }) {
  return UserModel.findOne({ _id: id });
}

function addUser(userToAdd) {
  const newUser = new UserModel(userToAdd);
  return newUser.save();
}

export { getUser, addUser };
