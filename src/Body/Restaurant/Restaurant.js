import React from "react";
import "./Restaurant.css";
import { CDN_URL } from "../../Utils/constant";

function Restaurant({ resData }) {
  const { cloudinaryImageId, name, locality, areaName, cuisines, costForTwo } =
    resData?.info;
  return (
    <div className="restaurantDiv">
      <div className="imgDiv">
        <img className="res_img" alt="img" src={CDN_URL + cloudinaryImageId} />
      </div>
      <h5>{name}</h5>
      <h6>{locality}</h6>
      <h6>{areaName}</h6>
      <h6>{cuisines.join(",")}</h6>
      <h6>{costForTwo}</h6>
    </div>
  );
}

export default Restaurant;
