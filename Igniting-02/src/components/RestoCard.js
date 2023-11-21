import { IMG_CDN_URL } from "../../config";

const RestoCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  locality,
  costForTwo,
}) => {
  return (
    <div className=" p-4 w-80">
      <div>
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <div className="pt-3 text-lg font-bold">{name}</div>
        <p className="text-lg text-gray-900 py-3">{cuisines.join(", ")}</p>
        <div className="flex justify-between font-bold">
          <span
            className={
              (avgRating < 3.7 || avgRating == "--"
                ? "bg-orange-500"
                : "bg-green-500") +
              " " +
              "px-2 text-white"
            }
          >
            {avgRating}
          </span>
          <span>{locality}</span>
          <span>{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default RestoCard;
