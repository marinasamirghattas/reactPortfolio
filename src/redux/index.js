import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

//action ADD
export const addTodoAction = (payload) => {
  console.log(payload);
  return {
    type: ADD_TODO,
    payload,
  };
};

//action DELETE
export const deleteTodoAction = (payload) => {
  console.log(payload);
  return {
    type: DELETE_TODO,
    payload,
  };
};
//initial state
const initialState = {
  todos: [],
};

//reducer
function todoReducer(state = initialState, action) {
  if (action.type === ADD_TODO) {
    return {
      ...state,
      todos: [...state.todos, action.payload],
    };
  }

  if (action.type === DELETE_TODO) {
    return {
      ...state,
      todos: [
        ...state.todos.filter((item, index) => {
          return index !== action.payload;
        }),
      ],
    };
  }

  return state;
}

//stor
export const store = createStore(todoReducer);
//export default todoReducer;
