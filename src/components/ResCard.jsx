import { IMG_BASE_URL } from "../utils/constants";

const ResCard = ({products}) => {
 
  /* console.log(props.resDetails.info.name) */
  return (
    <div className="res-container">
      <img className="food-img" src={products.thumbnail} />
      {/* <h2>{products.id}</h2> */}
      <h4>{products.title}</h4>
      <h4>{products.category} </h4>
      <h4>{products.price}</h4>
      <h5>{products.rating} Rating</h5>
      
    </div>
  );
};

export default ResCard

