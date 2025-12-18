import { IMG_BASE_URL } from "../utils/constants";

const ResCard = (props) => {
 
  /* console.log(props.resDetails.info.name) */
  return (
    <div className="res-container">
      <img className="food-img" src={IMG_BASE_URL+props.products.thumbnail} />
      <h2>{props.products.id}</h2>
      <h4>{props.products.description}</h4>
      <h4>{props?.products?.title} </h4>
      <h4>{props?.products?.price}</h4>
      <h5>{props?.products?.Rating} Rating</h5>
      
    </div>
  );
};

export default ResCard

