import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { disableMenuBar } from "../Utils/NavSlice";
import { useParams, useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(disableMenuBar());
  }, []);
  return (
    <div>
      <iframe
        width="1200"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
