export const CHANGED_SORT = "CHANGED_SORT";

export function changeSort(sortBy) {
  return {
    type: CHANGED_SORT,
    payload: sortBy,
  };
}

const initialState = {
  sortBy: "",
};

const classActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGED_SORT:
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};

export default classActionReducer;
