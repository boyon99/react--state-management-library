import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice"
import postReducer from './slices/postSlice'
import { postApi } from "../apis/post";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
// createStore 대신 configureStore를 사용

const rootReducer = combineReducers({
  counter: counterReducer,
  post: postReducer,
  [postApi.reducerPath]: postApi.reducer
})

const store = configureStore({
  reducer: rootReducer,
  // RTK Query
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
},
)

// RTK Query
setupListeners(store.dispatch)

export default store