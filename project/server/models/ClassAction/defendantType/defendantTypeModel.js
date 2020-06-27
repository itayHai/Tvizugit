import {Schema, model} from 'mongoose';

const defendantTypeSchema = new Schema({
  idAI: {
    type: Schema.Types.Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const defendantTypeModel = new model('defendantType', defendantTypeSchema);

export default defendantTypeModel;
