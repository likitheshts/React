import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/NavSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../Utils/Constants";
import { cacheResults } from "../Utils/SearchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    //console.log("hello");
    dispatch(toggleMenu());
  };

  const getSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log(searchQuery);

    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-2">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX////t7e3u7u4AAADr6+vs7Ozz8/Px8fG7u7vl5eXV1dWNjY2urq6Wlpb39/eZmZnIyMioqKjDw8NJSUk/Pz/a2tptbW3g4OAbGxvPz8+2trZnZ2dCQkJVVVUmJiYXFxd9PqD8AAAEDklEQVR4nO2c2XKjMBBFWWwJMoMwjhPbWf//L2MsT/LGlJtwW41uP52XVHErbXTQVhRjlVVVlSulIpHnYEIm/F/CbVmWm5VScaFye6XNKqksKvU2WpYqJjRP1fV3GH+Sm1XS7YWaxsMsQ7HSaCiO+Ew4lVDfPOg0YqLT2KccEtJpzFOsNBqKIz4TTiXUNw86jZjoNPYph4R0GvMUK42G4ojPhFMJ9c2DTiMmOo19yiEhncY8xUqjoTjiM+FUQn3zoNOIiU5jn3JISKcxT7HSaCiO+Ew4lVDfPOg0YqLT2KccEtJpzFOsOa1Qee+rhUlpxPehcG3bPozVtguSK4JTSOjD/rVG1es+eLTT+PYRlm+sx9YLn1ToNL6F5hur9Uin8Ud4wLo+euCIH94UEh4CLqFrFALWdeNgThPeVRK+B5zTqASsa8GT/qs7RxmN98xYR9iI/6CU8AxL+KSU8AnmNEEpYYA5TfhQCfgRYE7jepWEnWw8lFmbSkLhLIYooXtRCPgi+kiUztMEfJ/2ATtPEwZwwCEIn7S4+99+I3d8BuZ7Pjr8PI0P1W7o+/7PWH2/IA27Mnj8PM03ubEWJtHrcOY8jR3i2pN5ymFlZv0JZU5jh8ROY4dipdFQyxAT2qdY+uZBpxETncY+5ZCQTmOeYs1pBX/5EPcLk9KI74LfNU3zd6ymWZB2XmU/jXP9CTbVdurdzLm2+03B7WDxYu2c8EmFTgMPOEZEOo0/wwPW9Rm6n+ZTIeEncj8NetEi1gDcT3NQSXjgfprfcxqt/TQz9mLc+Xfr309jcE/UvaaglFDwpIXMadTepVvYfhpT46HMaXCfFT91AjqNLS+VzdNofVsA52kc+r94+z4EztNcvvFxOxTnf+ML52ncqudpvgkx17ad8Xyx9FeIuPYkJq492accEsqcxg6JncYOxUqjoZYhJrRPsfTNg04jJjqNfcohIZ3GPMWSNsBYNs7MCBKWPpT7oeu66+mkrluQhv1W49xTAJ9dC2in0Tp/CHMarTOkMKcxdQ5Y9ppSCAg9y+06lYTC8/gSp9G7UwHlNIr3YoCcxuDdJnf+3fr30+Ava4vF/TS/uJ9G7a4v2H4aU/e1iZxG5c69N+h+Gkv3JsrmaVTuvtxC52m07i8FztMYu4NWkBB7j7DoJzg74Y1s3AWtv0LEtScxce3JPuWQUOY0dkjsNHYoVhoNtQwxoX2KpW8edBox0WnsUw4J6TTmKVYaDcURnwmnEuqbB51GTHQa+5RDQjqNeYqVRkNxxGfCqYT65kGnEROdxj7lkJBOY55ipdFQHPGZcCqhvnnQacREp7FPOSSk05inWGk0FEd8JpxKqG8edBox0WnsUw4J6TTmKVYaDcURnwmnEv68UNdHX8DKFsu5QrZiAAAAAElFTkSuQmCC"
          className="h-8 cursor-pointer"
        ></img>
        <img
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
          className="h-8 p-2"
        />
      </div>
      <div className="col-span-9">
        <div>
          <input
            className="w-1/2 border px-5 border-gray-500 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setShowSuggestions(false);
            }}
          ></input>
          <button className="border border-gray-500 px-2 py-2 rounded-r-full bg-gray-200">
            Search
          </button>
          {showSuggestions && (
            <div className="absolute bg-white px-2 w-[32.5rem] shadow-lg rounded-lg border border-gray-100">
              <ul>
                {suggestions.map((s) => (
                  <li key={s} className="py-2 shadow-sm hover:bg-gray-200">
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <img
          alt="user-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJlKBIVBrtBkHgMfuKrv-N7Oi_eayJ_Vi56g&usqp=CAU"
          className="h-8"
        ></img>
      </div>
    </div>
  );
};

export default Head;
