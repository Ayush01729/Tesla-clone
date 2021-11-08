import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/carSlice/carslice";

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
