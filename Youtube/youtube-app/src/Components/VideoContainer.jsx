import React from "react";
import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../Utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [ytData, setytData] = useState([]);

  useEffect(() => {
    getAllYtData();
  }, []);

  async function getAllYtData() {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();

    setytData(json.items);
  }
  return (
    <div className="flex flex-wrap">
      {ytData.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
