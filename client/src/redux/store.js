import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../redux/user/userSlice";
import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({ user: userSliceReducer });

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};
const persisReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persisReducer,
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export const persistor = persistStore(store)