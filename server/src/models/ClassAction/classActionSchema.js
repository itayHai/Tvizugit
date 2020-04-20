import { Schema } from "mongoose";
import { userSchema } from "../User/userSchema";

export const classActionSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: Schema.Types.ObjectId, required: true },
  status: { type: Schema.Types.ObjectId },
  defendants: { type: [userSchema] },
  leadingUser: { type: userSchema, required: true },
  representingLawyer: { type: userSchema },
  openDate: { type: Date, default: Date.now },
  successChances: { type: String },
});

const ClassActionModel = mongoose.model("classAction", classActionSchema);

export default ClassActionModel;
