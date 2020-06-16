import LawyerModel from "./lawyerSchema";

function getLawyer({ email }) {

  return LawyerModel.findOne({ email: email });
}

function addLawyer(LawyerToAdd) {
  const newLawyer = new LawyerModel(LawyerToAdd);
  return newLawyer.save();
}

function updateLawyer(id, lawyer) {
  return LawyerModel.findOneAndUpdate({ _id: id }, lawyer)
    .populate("classactions");
}

function getAllLawyers() {
  return LawyerModel
    .find()
    .populate("classactions");
}

export { getLawyer, addLawyer, getAllLawyers, updateLawyer };
