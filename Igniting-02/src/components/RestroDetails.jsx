import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import useLocalStorage from "../utils/useLocalStorage";

const RestroMenu = () => {
  const { id } = useParams();

  const { restro, restoMenu } = useRestaurant(id);
  return restro === null ? (
    <Shimmer />
  ) : (
    // <div className="menu">
    //   <div>
    //     <h1>{restro.name}</h1>
    //     <img src={IMG_CDN_URL + restro?.cloudinaryImageId} />
    //     <h2>{restro.area}</h2>
    //     <h2>{restro?.city}</h2>
    //     <h2>{restro?.avgRating} Stars</h2>
    //     <h2>{restro?.costForTwoMsg}</h2>
    //     <p>{restro?.cuisines?.join(", ")}</p>
    //   </div>
    //   <div>
    //     <h1>Menu</h1>
    //     <ul>
    //       {restoMenu.map((e, index) => (
    //         <li key={index}>{e.name + ", Price: " + e?.price}</li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
    <>
      <div className="bg-[#3C4852] text-white py-8 mb-5 mx-8 shadow-md shadow-slate-700 rounded-lg mt-6">
        <div className="m-auto w-[96%] flex justify-evenly items-center gap-5 ">
          <div>
            <img
              className="w-96"
              src={IMG_CDN_URL + restro?.cloudinaryImageId}
            />
          </div>

          <div className="w-1/3">
            <div className="text-3xl pb-2">{restro?.name}</div>
            <div className="text-xl pb-2">{restro?.cuisines.join(",")}</div>
            <div className="pb-2">{restro?.locality}</div>
            <div className="flex gap-5">
              <div>{restro?.avgRatingString}</div>
              <div> {restro?.sla?.slaString}</div>
              <div>{restro?.costForTwoMsg}</div>
            </div>
          </div>

          <div className="border-2 border-white p-5 text-xl relative">
            <p className="absolute top-[-24px] p-2 translate-x-[-10px] bg-[#3C4852]">
              Offers :{" "}
            </p>
            <p>{restro?.aggregatedDiscountInfo?.descriptionList[0].meta} </p>
            <p>{restro?.aggregatedDiscountInfo?.descriptionList[1].meta} </p>
          </div>
        </div>
      </div>
      {Object.values(restoMenu).map((item) => {
        console.log(item);
        return (
          <div className="m-auto w-[80%]" key={item.id}>
            {item?.imageId === "" || !item?.imageId ? null : (
              <div className="flex gap-5 justify-between p-5 mb-5 shadow-md items-center">
                <div className="w-3/4">
                  <p className="text-xl font-bold pb-2">{item?.name}</p>
                  <p className="font-bold pb-2">
                    ₹ {Math.floor(item?.price) / 100}
                  </p>
                  <p className="pb-2">{item?.description}</p>
                  <button className="border-2 border-white bg-green-500 px-3 py-2 ">
                    Add item
                  </button>
                </div>
                <div className="">
                  <img className="w-52" src={IMG_CDN_URL + item?.imageId} />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};
export default RestroMenu;
