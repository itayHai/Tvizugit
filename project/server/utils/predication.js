import { getClassActionReasons } from '../models/ClassAction/Reason/classActionReasonBL';
import { getClassAction } from '../models/ClassAction/classActionBL';
import * as tf from '@tensorflow/tfjs';

const sheled = {
  // representingLawyer: 0,
  theme: 1,
  type: 2
}

async function predict(id) {
  const OFFSET = 2;
  const arrPredict = new Array(65);
  arrPredict[0] = 1;
  const model = await tf.loadLayersModel('http://localhost:8000/static/model.json');
  const classAction = await getClassAction(id);
  const caReasons = {};
  classAction.reasons.forEach(reason => {
    caReasons[reason.idAI] = true;
  });
  classAction.theme = classAction.defendants[0].theme

  for (const key in sheled) {
    if (sheled.hasOwnProperty(key)) {
      arrPredict[sheled[key]] = classAction[key].idAI;
    }
  }

  for (let index = 1; index <= 62; index++) {
    arrPredict[index + OFFSET] = (caReasons[index]) ? 1 : 0;
  }

  const inputTensor = tf.tensor1d(arrPredict).expandDims()
  const prediction = model.predict(inputTensor)
  const res = prediction.dataSync();

  let predictedId = 1;
  let maxValue = 0;
  res.forEach((currOption, index) => {
    if (currOption >= maxValue) {
      maxValue = currOption;
      predictedId = index;
    }
  })

  return predictedId;
}

export { predict };