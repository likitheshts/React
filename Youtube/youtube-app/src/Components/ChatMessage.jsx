import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-lg p-2 rounded-lg">
      <img
        className="h-8"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJlKBIVBrtBkHgMfuKrv-N7Oi_eayJ_Vi56g&usqp=CAU"
      ></img>
      <span className="font-bold px-2">{name}:</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
