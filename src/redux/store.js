import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import UserReducer from "./features/UserReducer/UserReducer.js";

const rootReducer = combineReducers({
    // your reducers here
    user : UserReducer,
})

const persistConfig = {
    key: "root",
    storage,
    whitelist : ["user"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
