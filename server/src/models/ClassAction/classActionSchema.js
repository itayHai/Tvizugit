import mongoose, { Schema } from "mongoose";
import { userSchema } from "../User/userSchema";
import { GraphQLNonNull, GraphQLList } from "graphql";

export const classActionSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "category", required: true },
  status: { type: String },
  defendants: [
    {
      type: String,
    },
  ],
  users: [
    { type: Schema.Types.ObjectId, ref: "user" }
  ],
  hashtags: [
    {
      type: String,
    },
  ],
  leadingUser: { type: Schema.Types.ObjectId, ref: "user", required: true },
  representingLawyer: { type: String },
  openDate: { type: Date },
  successChances: { type: String },
});

const ClassActionModel = mongoose.model("classAction", classActionSchema);

export default ClassActionModel;
