import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const initialState = 0;

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state) => {
      return state = state + 1
    },
    decrease: (state) => {
      return state = state - 1
    },
    increaseByDiff: (state, action) => {
      return state = state + action.payload
    }
  }
})

export const { increase, decrease, increaseByDiff } = counterSlice.actions
export default counterSlice.reducer

// custom hook pattern
export function useCounter() {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return { number, dispatch }
}