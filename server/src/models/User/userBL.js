import UserModel from "./userSchema";

function getUser({ id, email, password }) {
  return UserModel.findOne({ email: email },{password:password});
  
  // return UserModel.findOne({ _id: id });
}

function addUser(userToAdd) {
  const newUser = new UserModel(userToAdd);
  return newUser.save();
}

export { getUser, addUser };
