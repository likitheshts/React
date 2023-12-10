import { IMG_CDN_URL } from "../../config";

const FoodItemCard = ({ name, description, imageId, price }) => {
  return (
    <div className=" p-4 w-80">
      <div>
        <img src={IMG_CDN_URL + imageId} />
        <div className="pt-3 text-lg font-bold">{name}</div>
        <p className="text-lg text-gray-900 py-3">{description}</p>
        <div className="flex justify-between font-bold">
          <span>{Math.round(price) / 100}</span>
        </div>
      </div>
    </div>
  );
};

export default FoodItemCard;
