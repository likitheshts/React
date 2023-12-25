import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/ChatSlice";
import { generate, makeRandomMessage } from "../Utils/Helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const liveData = useSelector((store) => store.chatData.messages);
  //console.log(liveData);
  const [liveMessage, setLiveMessage] = useState([]);

  useEffect(() => {
    const Interval = setInterval(() => {
      //API Polling
      console.log("API polling");

      dispatch(
        addMessage({
          name: generate(),
          message: makeRandomMessage(10),
        })
      );
    }, 1000);
    return () => {
      clearInterval(Interval);
    };
  }, []);
  return (
    <div>
      <div className="w-56 h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {liveData.map((data, index) => (
          <ChatMessage key={index} name={data.name} message={data.message} />
        ))}
      </div>
      <form
        className="bg-gray-100 p-2 m-2 shadow-lg w-56"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "likithesh",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-36 px-2"
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          value={liveMessage}
        />
        <button className="px-2 mx-1 bg-green-100"> Send </button>
      </form>
    </div>
  );
};

export default LiveChat;
