import { Schema, model } from "mongoose";

export const categorySchema = new Schema({
  name: { type: String, required: true },
  engName: { type: String, required: true },
});

const CategoryModel = model("category", categorySchema);

export default CategoryModel;
