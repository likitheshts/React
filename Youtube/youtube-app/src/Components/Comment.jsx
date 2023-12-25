import React from "react";

const Comment = ({ data, updateComments, index }) => {
  let { name, text, reply } = data;

  const updateChildData = (childdata, index) => {
    reply.splice(index, 1, childdata);
    updateComments({ name: name, text: text, reply: reply }, index);
  };
  const updateInternalComments = (e) => {
    text = e.target.value;
    updateComments({ name: name, text: text, reply: reply }, index);
  };
  //console.log(data);
  return (
    <>
      <div className="flex p-2 shadow-lg rounded-lg border border-gray-100 py-2">
        <img
          className="w-8 h-8"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJlKBIVBrtBkHgMfuKrv-N7Oi_eayJ_Vi56g&usqp=CAU"
        ></img>
        <div className="px-3">
          <p className="font-bold">Name: {name}</p>
          <p>Comment:</p>
          <input
            type="text"
            value={text}
            onChange={(e) => updateInternalComments(e)}
          ></input>
        </div>
      </div>

      <div className="pl-5 border-l-black ml-5">
        {reply !== undefined &&
          reply.length !== 0 &&
          reply.map((replydata, index) => (
            <Comment
              key={index}
              data={replydata}
              updateComments={updateChildData}
              index={index}
            />
          ))}
      </div>
    </>
  );
};

export default Comment;
