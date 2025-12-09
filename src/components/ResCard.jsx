import { IMG_BASE_URL } from "../utils/constants";

const ResCard = (props) => {
 
  /* console.log(props.resDetails.info.name) */
  return (
    <div className="res-container">
      <img className="food-img" src={IMG_BASE_URL+props.resDetails.info.cloudinaryImageId} />
      <h2>{props.resDetails.info.name}</h2>
      <h4>{props.resDetails.info.cuisines.join(', ')}</h4>
      <h4>{props?.resDetails?.info?.sla?.deliveryTime} Minutes</h4>
      <h4>{props?.resDetails?.info?.costForTwo}</h4>
      <h5>{props?.resDetails?.info?.avgRating} Rating</h5>
      
    </div>
  );
};

export default ResCard