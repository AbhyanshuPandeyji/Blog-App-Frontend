import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import UserReducer from "./features/UserReducer/UserReducer.js";
import LoaderReducer from "./features/Loaders/loaders.js";
import BlogReducer from "./features/blogReducer/blogReducer.js";

const rootReducer = combineReducers({
  // your reducers here
  user: UserReducer,
  loader: LoaderReducer,
  blogs: BlogReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user","loader","blogs"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
