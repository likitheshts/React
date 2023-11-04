import { useState, useEffect } from "react";
import logo from "../Assets/img/logo.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const title = () => {
  return (
    <a href="/">
      <div>
        <img alt="logo" className="logo" src={logo}></img>
      </div>
    </a>
  );
};

const HeaderComponent = () => {
  const [isUserLoggedIn, setisUserLoggedIn] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="header">
      {title()}
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {!isUserLoggedIn ? (
        <button
          onClick={() => {
            setisUserLoggedIn(true);
          }}
        >
          Login
        </button>
      ) : (
        <button onClick={() => navigate("/login")}> Logout</button>
      )}
    </div>
  );
};
export default HeaderComponent;
