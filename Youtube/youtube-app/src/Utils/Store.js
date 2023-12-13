import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./NavSlice";
const Store = configureStore({
  reducer: {
    nav: NavSlice,
  },
});

export default Store;
