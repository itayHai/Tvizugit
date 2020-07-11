import { Schema, model } from "mongoose";

const WinRateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  idAI: {
    type: Number,
    required: true,
  },
});

const WinRateModel = new model("winRate", WinRateSchema);
export default WinRateModel;
