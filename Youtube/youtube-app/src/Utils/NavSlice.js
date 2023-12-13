import { createSlice } from "@reduxjs/toolkit";

const NavSlice = createSlice({
  name: "nav",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    disableMenuBar: (state) => {
      state.isMenuOpen = false;
    },
    enableMenuBar:(state)=>{
      state.isMenuOpen=true;
    }
  },
});

export const { toggleMenu, disableMenuBar, enableMenuBar } = NavSlice.actions;
export default NavSlice.reducer;
