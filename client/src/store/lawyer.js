export const CHANGE_REGISTER_LAWYER = "CHANGE_REGISTER_LAWYER";

export function changeRegisterLawyer(lawyer) {
  return {
    type: CHANGE_REGISTER_LAWYER,
    lawyer,
  };
}

const initialState = {
  
  RegisterLawyer: {
    id: "",
    name: "",
    description: "" ,
    expertise: {},
    email: "",
    address: "",
    phone: "",
    seniority: "",
    img: "",
    classactions: "",
  },

};

function lawyerReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_REGISTER_LAWYER: {
      return {
        ...state,
        RegisterLawyer: action.lawyer,
      };
    }
    default: {
      return state;
    }
  }
}

export default lawyerReducer;