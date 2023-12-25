import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./NavSlice";
import SearchSlice from "./SearchSlice";
import ChatSlice from "./ChatSlice";
const Store = configureStore({
  reducer: {
    nav: NavSlice,
    search: SearchSlice,
    chatData: ChatSlice,
  },
});

export default Store;
