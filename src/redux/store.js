import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReducer } from "../redux/contactsSlice";
import { filtersReducer } from "../redux/filtersSlice";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["persist/PERSIST", REHYDRATE],
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

const persistedFiltersReducer = persistReducer(persistConfig, filtersReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: persistedFiltersReducer, 
  },
});

export const persistor = persistStore(store);
