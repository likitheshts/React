import RestoCard from "./RestoCard";
import { restaurantList } from "../../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searcttxt, restList) {
  console.log(searcttxt);
  const fil = restList.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searcttxt)
  );

  return fil;
}

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestro, setfilteredRestro] = useState([]);

  useEffect(() => {
    console.log("useeffect");
    getRestuarant();
  }, []);

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
      console.log(console.error());
    }
  }

  if (!restaurants) return null;

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchTxt, restaurants);
            setfilteredRestro(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="resto-list">
        {filteredRestro.length === 0 && searchTxt.length !== 0 ? (
          <h1>No restaurant found</h1>
        ) : (
          filteredRestro.map((restro) => {
            return (
              <Link
                to={"/restaurant/" + restro?.info?.id}
                key={restro?.info?.id}
              >
                <RestoCard {...restro?.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
