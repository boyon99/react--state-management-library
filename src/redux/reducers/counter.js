import { INC_COUNT, DEC_COUNT } from "../constants/counter";

const initialState = 0

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INC_COUNT:
      return state + action.payload.diff
    case DEC_COUNT:
      return state - action.payload.diff
    default:
      return state
  }
}