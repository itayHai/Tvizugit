import classActionReasonModel from "./classActionReasonModel";

function getClassActionReasons() {
  return classActionReasonModel.find({});
}

export { getClassActionReasons };
