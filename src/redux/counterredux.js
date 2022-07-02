import { createStore } from "redux";

const INCREAMENT = "INCREAMENT_COUNT";
const DECREAMENT = "DECREAMENT_COUNT";

//action

export const increamentAction = (payload) => {
  console.log(payload);
  return {
    type: INCREAMENT,
    payload: "increase",
  };
};

export const decreamentAction = (payload) => {
  console.log(payload);
  return {
    type: DECREAMENT,
    payload: "decrease",
  };
};

///initial state
const initialState = {
  counter: 1,
};

//reducer

function counterReducer(state = initialState, action) {
  if (action.type === INCREAMENT) {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === DECREAMENT && state.counter > 0) {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  return state;
}

//store
export const secondstore = createStore(counterReducer);
