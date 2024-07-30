import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter.store";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
