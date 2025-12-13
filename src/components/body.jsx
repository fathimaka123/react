import { useState } from "react";
import ResCard from "./ResCard";
const Body = ({resLi}) => {
const [listOfRestaurants,setListOfRestaurants] = useState(resLi)


  return (
    <div className="body">
      <div className="body-container">
        <div className="filter-container">
          <button className="filter-btn" onClick={()=>{
           const filtered = resLi.filter((res) => res.info.avgRating > 4.5)
            setListOfRestaurants(filtered)
          }}>Top Rated Restaurants</button>
        </div>
        <div className="restau-cards">
          {listOfRestaurants.map((res) => <ResCard resDetails={res} key={res.info.id} />)}
        </div>
      </div>
    </div>
  );
};

export default Body