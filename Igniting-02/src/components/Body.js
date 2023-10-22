import RestoCard from "./RestoCard";
import { restaurantList } from "../../config";
import { useState } from "react";

function filterData(searcttxt, restList) {
  console.log(searcttxt);
  const fil = restList.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searcttxt)
  );

  return fil;
}

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
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
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resto-list">
        {restaurants.map((restro) => {
          return <RestoCard {...restro.data} key={restro.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
