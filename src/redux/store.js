import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReducer } from "../redux/contactsSlice";
import { filtersReducer } from "../redux/filtersSlice"; // Updated import name

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["persist/PERSIST", "persist/REHYDRATE"], // Blacklist persist actions
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);
const persistedFiltersReducer = persistReducer(persistConfig, filtersReducer); // Updated to use filtersReducer

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: persistedFiltersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
