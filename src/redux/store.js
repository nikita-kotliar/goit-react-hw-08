import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "../redux/contactsSlice";
import { name } from "../redux/filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: name,
  },
});
