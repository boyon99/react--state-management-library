import { combineReducers, legacy_createStore as createStore } from "redux";

import counter from "./counter";
import user from './user'

const rootReducer = combineReducers({
  counter,
  user
})

const store = createStore(rootReducer)

export default store