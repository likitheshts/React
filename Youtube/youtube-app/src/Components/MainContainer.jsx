import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { YOUTUBE_API } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { enableMenuBar } from "../Utils/NavSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(enableMenuBar());
  }, []);
  return (
    <div className="">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
