import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { JSON_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const[filteredList,setFilteredList] = useState([])
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(JSON_API);
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.products|| []
    );
    setFilteredList(
      json?.products || []
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="body-container">
        <div className="filter-container">
          <button
            className="filter-btn"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) => res.products.Rating > 4.5);
              console.log(filtered)
              setFilteredList(filtered);
            }}
          >
            Top Rated Restaurants
          </button>
          <div className="search-container">
            <input
              className="search-input"
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                
              }}
            />{""}
            <button onClick={()=>{
             const filtered= listOfRestaurants.filter((res) => res.products.title.toLowerCase().includes(searchText.toLocaleLowerCase()))
             setFilteredList(filtered)
            }} >search</button>
          </div>
        </div>
        <div className="restau-cards">
          {filteredList?.map((products) => (
            <ResCard key={products.id} products={products} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body
