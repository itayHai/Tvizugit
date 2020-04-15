import * as actionTypes from "./actions";

const initialState = {
  sortBy: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGED_SORT":
      return {
        ...state,
        sortBy: [action.sortBy],
      };
    default:
      return state;
  }
};

export default reducer;
