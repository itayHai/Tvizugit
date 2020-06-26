import {Schema, model} from 'mongoose';

const classActionReasonSchema = new Schema({
  idAI: {
    type: Schema.Types.Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const classActionReasonModel = new model('classActionReason', classActionReasonSchema);

export default classActionReasonModel;
