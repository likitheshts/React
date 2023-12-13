import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import SideBars from "./SideBars";
import MainContainer from "./MainContainer";
import WatchPage from "./WatchPage";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="flex">
      <SideBars />
      <Outlet />
    </div>
  );
};

export default Body;
