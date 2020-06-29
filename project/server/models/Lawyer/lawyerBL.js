import LawyerModel from './lawyerSchema';

function getLawyer ({email}) {
  return LawyerModel.findOne({email});
}

function addLawyer (LawyerToAdd) {
  const newLawyer = new LawyerModel(LawyerToAdd);


  return newLawyer.save();
}

function addClassActionToLawyer (id, classActionID) {
  LawyerModel.findOne({_id: id})
    .then(lawyer => {
      lawyer.classactions.push(classActionID);
      const newLawyer = new LawyerModel(lawyer);


      return newLawyer.save();
    })
    .catch(err => {
      console.log(err);
    });
}
function deleteClassActionToLawyer (id, classActionID) {
  LawyerModel.findOne({_id: id})
    .then(lawyer => {
      const classactions = lawyer.classactions;
      const index = classactions.indexOf(classActionID);

      console.log(index);
      if (index > -1) {
        classactions.splice(index, 1);
      }
      lawyer.classactions = classactions;
      const newLawyer = new LawyerModel(lawyer);


      return newLawyer.save();
    })
    .catch(err => {
      console.log(err);
    });
}

function getAllLawyers () {
  return LawyerModel
    .find()
    .populate('classactions');
}

export {getLawyer, addLawyer, getAllLawyers, addClassActionToLawyer, deleteClassActionToLawyer};
