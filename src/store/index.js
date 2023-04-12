import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice"
// createStore 대신 configureStore를 사용

const rootReducer = combineReducers({
  counter: counterReducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store