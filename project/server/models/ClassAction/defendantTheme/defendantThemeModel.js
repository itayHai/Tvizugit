import { Schema, model } from "mongoose";

const defendantThemeSchema = new Schema({
    idAI: {
        type: Schema.Types.Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
});

const defendantTheme = new model("defendantTheme", defendantThemeSchema);
export default defendantTheme;
