export const SET_MODE = "SET_MODE";

  export function setMode(mode){
      return{
          type: SET_MODE,
          mode
      }
  }

const initialState = {
    mode: 'login',
    user: {
        name: '',
        userName: '',
        email: ''
    }
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_MODE":
            return {
                mode: action.mode
            }
        default:
            return state
    }
}

export default usersReducer;
