export const CHANGE_LOGGED_LAWYER = "CHANGE_LOGGED_LAWYER";

export function changeLoggedInLawyer(lawyer) {
  return {
    type: CHANGE_LOGGED_LAWYER,
    lawyer,
  };
}

const initialState = {
  
  loggedInLawyer: {
    id: "",
    name: "",
    description: "" ,
    expertise: "",
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
    case CHANGE_LOGGED_LAWYER: {
      return {
        ...state,
        loggedInLawyer: action.lawyer,
      };
    }
    default: {
      return state;
    }
  }
}

export default lawyerReducer;