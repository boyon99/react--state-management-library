import { INC_COUNT, DEC_COUNT } from "../constants/counter";

const initialState = 0

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INC_COUNT:
      return state + 1
    case DEC_COUNT:
      return state - 1
    default:
      return state
  }
}