import defendantTypeModel from './defendantTypeModel';

function getDefendantTypes () {
  return defendantTypeModel.find({});
}

export {getDefendantTypes};
