import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../config";
import Shimmer from "./Shimmer";
const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";

const RestroMenu = () => {
  const { id } = useParams();
  const [restro, setRestro] = useState(null);
  const [restoMenu, setrestroMenu] = useState([]);
  useEffect(() => {
    getRestroMenuDetails();
  }, []);

  async function getRestroMenuDetails() {
    const response = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" +
        id
    );
    const dataJson = await response.json();
    //console.log(dataJson);
    const restaurantData =
      dataJson?.data?.cards
        ?.map((x) => x.card)
        ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
        ?.info || null;
    setRestro(restaurantData);
    //console.log(restaurantData);

    const restaurantMenu =
      dataJson?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || [];
    setrestroMenu(restaurantMenu);
    console.log(restaurantMenu);
  }
  return restro === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>{restro.name}</h1>
        <img src={IMG_CDN_URL + restro?.cloudinaryImageId} />
        <h2>{restro.area}</h2>
        <h2>{restro?.city}</h2>
        <h2>{restro?.avgRating} Stars</h2>
        <h2>{restro?.costForTwoMsg}</h2>
        <p>{restro?.cuisines?.join(", ")}</p>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {restoMenu.map((e, index) => (
            <li key={index}>{e.name + ", Price: " + e?.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestroMenu;
