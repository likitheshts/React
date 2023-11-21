import { useEffect, useState } from "react";
const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";

const useRestaurant = (resID) => {
  const [restro, setRestro] = useState(null);
  const [restoMenu, setrestroMenu] = useState([]);
  useEffect(() => {
    getRestroMenuDetails();
  }, []);

  async function getRestroMenuDetails() {
    const response = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" +
        resID
    );
    const dataJson = await response.json();
    //console.log(dataJson);
    const restaurantData =
      dataJson?.data?.cards
        ?.map((x) => x.card)
        ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
        ?.info || null;
    setRestro(restaurantData);
    console.log(restaurantData);

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
  return { restro, restoMenu };
};

export default useRestaurant;
