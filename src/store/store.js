import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./features/Job/jobSlice";


export const store = configureStore({
  reducer: {
    jobs: jobSlice,
  }
})