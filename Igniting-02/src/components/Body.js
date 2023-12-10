import RestoCard from "./RestoCard";
import { restaurantList } from "../../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";
import useLocalStorage from "../utils/useLocalStorage";
const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestro, setfilteredRestro] = useState([]);

  const offline = useOnline();

  useEffect(() => {
    getRestuarant();
  }, []);

  if (!offline) {
    return <h1>You are offline, Check your connection</h1>;
  }
  async function getRestuarant() {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.923779&lng=77.571315&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsondata = await data.json();
      //console.log(jsondata);
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsondata?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            jsondata?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          //console.log(checkData);
          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      const resData = await checkJsonData(jsondata);
      //console.log(resData);
      setRestaurants(resData);
      setfilteredRestro(resData);
    } catch (error) {
      //console.log(console.error());
    }
  }

  if (!restaurants) return null;

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="mb-14">
        <div className="w-[96%] m-auto py-3 flex justify-between items-center">
          <p className="text-2xl">{restaurants.length} restaurants</p>
          <form
            className="w-1/2 px-3 py-2 text-xl text-right "
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              className="p-2 border-2 w-[45%] border-gray-500 outline-none border-r-0"
              placeholder="Search restaurants.."
              value={searchTxt}
              onChange={(e) => setSearchTxt(e.target.value)}
            ></input>
            <button
              className="px-3 py-2 border-2  border-gray-500 bg-gray-700 text-white hover:bg-white hover:text-black"
              onClick={() => {
                const data = filterData(searchTxt, restaurants);
                setfilteredRestro(data);
              }}
              data-testid="search"
            >
              Search
            </button>
          </form>
        </div>
        <div>
          <div className="m-auto w-[96%] flex flex-wrap gap-6 justify-between">
            {filteredRestro.length === 0 && searchTxt.length !== 0 ? (
              <p className="text-center w-full text-3xl">No restaurant found</p>
            ) : (
              filteredRestro.map((restro) => {
                return (
                  <Link
                    to={"/restaurant/" + restro?.info?.id}
                    key={restro?.info?.id}
                  >
                    <div className="border-transparent h-full hover:shadow-md hover:shadow-gray-400 transition duration-0 hover:duration-450">
                      {" "}
                      <RestoCard {...restro?.info} />
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
