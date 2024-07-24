import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "./address.store";
import counterReducer from "./counter.store";

export default configureStore({
  reducer: {
    address: addressReducer,
    counter: counterReducer,
  },
});
