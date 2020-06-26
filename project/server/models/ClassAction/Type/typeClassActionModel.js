import {Schema, model} from 'mongoose';

const typeOfClassActionSchema = new Schema({
  idAI: {
    type: Schema.Types.Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const typeOfClassActionModel = new model('classActionType', typeOfClassActionSchema);

export default typeOfClassActionModel;
