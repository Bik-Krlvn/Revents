import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./TestConstants";
import createReducer from "../app/common/utils/reducerUtils";

const initialState = {
  data: 42
};

export const incrementCounter = (state, payload) => {
  return { ...state, data: state.data + 1 };
};

export const decrementCounter = (state, payload) => {
  return { ...state, data: state.data - 1 };
};
// const testReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case INCREMENT_COUNTER:
//       return { ...state, data: state.data + 1 };
//     case DECREMENT_COUNTER:
//       return { ...state, data: state.data - 1 };

//     default:
//       return state;
//   }
// };

export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter
});
