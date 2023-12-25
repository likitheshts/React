import React, { useState, useEffect } from "react";
import Comment from "./Comment";

let commenstDataGlobal = [
  {
    name: "likithesh",
    text: "hello",
    reply: [
      {
        name: "likithesh",
        text: "hello",
        reply: [
          {
            name: "likithesh",
            text: "10",
            reply: [],
          },
          {
            name: "likithesh",
            text: "hello0p",
            reply: [],
          },
        ],
      },
      {
        name: "likithesh",
        text: "hello",
        reply: [],
      },
    ],
  },
  {
    name: "likithesh",
    text: "hello",
    reply: [],
  },
  {
    name: "likithesh",
    text: "hello",
    reply: [],
  },
  {
    name: "likithesh",
    text: "hello",
    reply: [],
  },
];

const CommentsContainer = () => {
  const [commentsData, setCommentsData] = useState([]);
  useEffect(() => {
    setCommentsData(commenstDataGlobal);
  }, []);
  useEffect(() => {
    console.log(commentsData);
  }, [commentsData]);
  const updateComments = (newcomments, index) => {
    let tempCommentsData = commentsData;
    tempCommentsData.splice(index, 1, newcomments);
    //console.log(tempCommentsData);
    setCommentsData([...tempCommentsData]);
  };
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-3xl">Comments:</h1>
      {commentsData.map((comments, index) => (
        <Comment
          key={index}
          data={comments}
          updateComments={updateComments}
          index={index}
        />
      ))}
    </div>
  );
};

export default CommentsContainer;
