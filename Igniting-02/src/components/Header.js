import { useState, useEffect } from "react";
import logo from "../Assets/img/logo.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../utils/useAuth";
import useLocalStorage from "../utils/useLocalStorage";
import { useSelector } from "react-redux";

const title = () => {
  return (
    <Link to="/">
      <div>
        <img
          data-testid="logo"
          alt="logo"
          className="w-16 rounded-full"
          src={logo}
        ></img>
      </div>
    </Link>
  );
};

const HeaderComponent = () => {
  const [isUserLoggedIn, setisUserLoggedIn] = useAuth();
  const [, , clearLocalStorage] = useLocalStorage("user");
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="sticky top-0 bg-white z-10 shadow-md">
      <div className="p-2 w-[96%] m-auto flex justify-between items-center">
        {title()}
        <div>
          <ul className="h-full flex justify-between gap-5 text-xl">
            <li className="px-3 py-2">
              <Link to="/">Home </Link>
            </li>

            <li className="px-3 py-2">
              <Link to="/about">About</Link>
            </li>
            <Link to="/contact">
              <li className="px-3 py-2">Contact</li>
            </Link>
          </ul>
        </div>
        <ul className="h-full flex justify-between gap-5 text-xl ">
          <Link to="/cart">
            <li data-testid="cart" className="px-3 py-2  text-gray-700">
              Cart - {cartItems.length}
            </li>
          </Link>

          <li className="px-3 py-2 bg-gray-700 border-2  transition duration-0 text-white  hover:bg-white hover:text-gray-700 hover:duration-150 hover:border-gray-700">
            {!isUserLoggedIn ? (
              <button
                className="w-20"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            ) : (
              <button
                className="w-20"
                onClick={() => {
                  clearLocalStorage();
                  navigate("/login");
                }}
              >
                {" "}
                Logout
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
