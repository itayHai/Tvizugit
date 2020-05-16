import { Schema, model } from "mongoose";

const UserRoleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  engName: {
    type: String,
    required: true,
  },
});

const UserRoleModel = new model("userRole", UserRoleSchema);
export default UserRoleModel;
