import React from "react";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { itemsContext } from "../../context/itemContext";
export default function HomePage() {
  const [items, setItems] = useState([]);
  const getItemsFromContext = useContext(itemsContext);
  const navigatingToHomePage = useNavigate();
  console.log(getItemsFromContext);
  useEffect(() => {
    setItems(getItemsFromContext.items);
    console.log(getItemsFromContext.items);
    console.log(items + "maybe this works");
  }, [getItemsFromContext]);

  return (
    <div>
      <nav style={{ backgroundColor: "white", height: "30px" }}>
        {/* <img src="" alt="" /> */}
        {/* <Link to = '/my-profile' >My Profile</Link> */}
        <Link to="/home-page">Homepage</Link>
        {/* <Link to = '/add-coupon' >Add coupon</Link> */}
      </nav>
      <div className="items">
        {items.map((item) => {
          return (
            <>
              <div key={item.userId}>{item.userId}</div>
              <div key={item.couponId}>{item.couponId} </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
