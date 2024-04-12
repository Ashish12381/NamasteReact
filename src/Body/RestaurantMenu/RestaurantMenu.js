import React, { useEffect, useState } from "react";
import Shimmer from "../../CommonComponents/Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import { menuApiUrl } from "../../Utils/constant";

function RestaurantMenu() {
  const [ResInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(menuApiUrl + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  if (ResInfo === null) return <Shimmer />;
  const { name, cuisines } = ResInfo.cards[2].card.card.info;
  const itemCard =
    ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  console.log(itemCard);
  return (
    <>
      <div className="container-fluid bodyContainer mt-10 mb-5 pt-10">
        <div className="container">
          {/* {itemCard[0].card.info.name} */}
          <h1>{name}</h1>
          <p>{cuisines.join(",")}</p>
          {itemCard.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} -{"Rs "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </div>
      </div>
    </>
  );
}

export default RestaurantMenu;
