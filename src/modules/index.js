import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";

import counter from "./counter";
import user from './user'
import posts from "./posts";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import ReduxThunk from 'redux-thunk'

// reducer
const rootReducer = combineReducers({
  counter,
  user,
  posts
})

// reudx persist
const persistConfig = {
  key: "root", // 임의의 key 값
  storage: storage, // 정확히 어떤 storage 에 저장할지
  whitelist: ["counter"], // 값을 저장할 리듀서명
  blacklist: ["user"], // 값을 저장하지 않을 리듀서명
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(logger, ReduxThunk)));
// store를 영구보존하는 복사본
export const persistor = persistStore(store)

