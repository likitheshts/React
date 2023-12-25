import { createSlice } from "@reduxjs/toolkit";
import { liveoffset } from "./Constants";

const ChatSlice = createSlice({
  name: "chatData",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(liveoffset, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = ChatSlice.actions;
export default ChatSlice.reducer;
