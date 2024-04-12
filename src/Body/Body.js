import React, { useEffect, useState } from "react";
import Restaurant from "./Restaurant/Restaurant";
import "./Body.css";
import Shimmer from "../CommonComponents/Shimmer/Shimmer";
import { shimmerData } from "../Utils/constant";
import { Link } from "react-router-dom";
// import { resList } from "../Utils/constant";

function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [buttonActive, setButtonActive] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5551325&lng=77.2613488&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const handleInputChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    search(text);
  };
  console.log(listOfRestaurants);
  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      const text = event.target.value;
      setSearchText(text);
      search(text);
    }
  };

  const search = (text) => {
    if (text.trim() === "") {
      setFilteredRestaurants(listOfRestaurants);
    } else {
      const searchRestaurants = listOfRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredRestaurants(searchRestaurants);
    }
  };

  return (
    <div className="container-fluid bodyContainer mt-10 mb-5 pt-10">
      <div className="container">
        {listOfRestaurants.length === 0 ? (
          <div className="row">
            {shimmerData.map((item, index) => {
              return (
                <>
                  <div className="col-lg-3">
                    <Shimmer />
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <>
            <div className="topRated_searchDiv">
              <div
                onClick={() => {
                  const filterList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.4
                  );
                  setListOfRestaurants(filterList);
                  setButtonActive(true);
                }}
                className={
                  buttonActive
                    ? "top_rated_restaurants active"
                    : "top_rated_restaurants"
                }
              >
                Top Rated Resstaurants
              </div>
              <div className="searchDiv">
                <input
                  type="text"
                  value={searchText}
                  placeholder="Search here...."
                  onChange={handleInputChange}
                  onKeyUp={handleKeyUp}
                />
              </div>
            </div>
            <div className="restaurant_cards row">
              {filteredRestaurants.map((RestaurantList) => {
                return (
                  <>
                    <div className="col-lg-3">
                      <Link
                        to={"/restaurant/" + RestaurantList.info.id}
                        key={RestaurantList.info.id}
                      >
                        <Restaurant resData={RestaurantList} />
                      </Link>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Body;
