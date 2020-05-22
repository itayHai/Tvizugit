import mongoose, { Schema } from "mongoose";

export const lawyerSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  expertise: {
    type: String,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  seniority: {
    type: String,
  },
  img: {
    type: String,
  },
  //classactions: [{ type: Schema.Types.ObjectId, ref: "classAction" }],
  classactions: {
    type: String,
  },
});

const LawyerModel = mongoose.model("lawyer", lawyerSchema);

export default LawyerModel;
