export const CHANGE_LOGGED_LAWYER = "CHANGE_LOGGED_LAWYER";

export function changeLoggedInUser(lawyer) {
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