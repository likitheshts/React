import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBars = () => {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul className="font-bold py-2">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscription</li>
        <li>Music</li>
      </ul>
      <h1 className="font-bold pt-5">Subscritpions</h1>
      <ul>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
      </ul>
      <h1 className="font-bold pt-5">Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
      </ul>
    </div>
  );
};

export default SideBars;
