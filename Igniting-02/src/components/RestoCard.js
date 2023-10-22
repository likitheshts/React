import { IMG_CDN_URL } from "../../config";

const RestoCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>Ratings : {avgRating}</h4>
    </div>
  );
};

export default RestoCard;
