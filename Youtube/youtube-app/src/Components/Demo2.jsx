import React, { useRef, useState } from "react";

const Demo2 = () => {
  let a = 0;
  const [s, sets] = useState(0);
  const ref = useRef(0);
  return (
    <div>
      <div>
        <h1 className="p-2 m-2 w-16"> {a} </h1>
        <button
          onClick={(e) => {
            a++;
            console.log(a);
          }}
        >
          Let button
        </button>
      </div>
      <div>
        <h1>State : {s}</h1>
        <button
          onClick={(e) => {
            sets(s + 1);
            console.log(s);
          }}
        >
          State button
        </button>
      </div>
      <div>
        <h1>Ref : {ref.current}</h1>
        <button
          onClick={(e) => {
            ref.current = ref.current + 1;
            console.log(ref.current);
          }}
        >
          Ref button
        </button>
      </div>
    </div>
  );
};

export default Demo2;
