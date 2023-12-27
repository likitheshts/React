import React, { useMemo, useState } from "react";
import { findNthPrime } from "../Utils/Helper";

const Demo = () => {
  const [numberValue, setNumber] = useState();
  const [darkMode, setDarkMode] = useState(false);

  const prime = useMemo(() => findNthPrime(numberValue), [numberValue]);
  //const prime = findNthPrime(numberValue);
  console.log("render");
  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black" +
        (darkMode && " bg-black text-white")
      }
    >
      <button
        onClick={(e) => {
          setDarkMode(!darkMode);
        }}
      >
        Toggle
      </button>
      <div>
        <input
          className="border border-black w-full px-2"
          type="number"
          value={numberValue}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        ></input>
      </div>
      <div>Prime: {prime}</div>
    </div>
  );
};

export default Demo;
