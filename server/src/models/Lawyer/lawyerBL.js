import LawyerModel from "./lawyerSchema";

function getLawyer({ email }) {

  return LawyerModel.findOne({ email: email });
}

function addLawyer(LawyerToAdd) {
  const newLawyer = new LawyerModel(LawyerToAdd);
  return newLawyer.save();
}

export { getLawyer, addLawyer };
