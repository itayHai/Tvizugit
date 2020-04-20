import UserModel from "./userSchema";

function getUser(args) {
  return UserModel.find({ id: args.id });
}

function addUser(userToAdd) {
  const newUser = new UserModel(userToAdd);
  return newUser.save();
}

export { getUser, addUser };
