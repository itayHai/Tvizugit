import UserModel from "./userModel";

function getUser({ email, password }) {

  return UserModel.findOne({ email: email , password: password });
}

function addUser(userToAdd) {
  const newUser = new UserModel(userToAdd);
  return newUser.save();
}

export { getUser, addUser };
