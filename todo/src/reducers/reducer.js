import { ADD_TODO, TOGGLE_COMPLETED } from "../actions/actions";

const initialState = {
  todos: [
    {
      value: "Walk the dog.",
      completed: false
    }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: action.payload
      };
    case TOGGLE_COMPLETED:
      console.log(action.payload);
      return {
        ...state,
        todos: action.payload
      };
    default:
      return state;
  }
}

export default reducer;