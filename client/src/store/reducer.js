import * as actionTypes from "./actions";

const initialState = {
  sortBy: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGED_SORT:
      return {
        ...state,
        sortBy: [action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
