import { Schema, model } from "mongoose";

export const classActionSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "category", required: true },
  status: { type: Schema.Types.ObjectId },
  defendants: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  leadingUser: { type: Schema.Types.ObjectId, ref: "user", required: true },
  leadingUser: { type: Schema.Types.ObjectId, ref: "user" },
  openDate: { type: Date },
  successChances: { type: String },
});

const ClassActionModel = model("classAction", classActionSchema);

export default ClassActionModel;
