import { createContext } from "react";

const UserContext = createContext(
  {
  user: {
    userName: "",
    token: "",
  },
});

export default UserContext;
