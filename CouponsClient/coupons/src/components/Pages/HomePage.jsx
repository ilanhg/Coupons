import React from "react";
import { useState, useContext, useEffect } from "react";
import { Link, unstable_useBlocker, useNavigate } from "react-router-dom";
import { itemsContext } from "../../context/itemContext";
import { couponsItem, itemContext } from "../../context/couponsContext";
import { userContext, userSignUp } from "../../context/userContext";
export default function HomePage() {

  const [items, setItems] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [allUsers,setAllUsers]=useState([]);


  const getItemsFromContext = useContext(itemsContext);
  const users=useContext(userContext);
  const couponsItem = useContext(itemContext)
  const navigatingToHomePage = useNavigate();
  console.log(getItemsFromContext);

  useEffect(() => {
    setItems(getItemsFromContext.items);
    setAllUsers(users.getAllUsers);
    setCoupons(couponsItem.couponItemList);
    console.log(allUsers);
    console.log(coupons);

    console.log(items);
    // console.log(items + "maybe this works");
    // console.log("get all users")
    console.log(users.getAllUsers)
    console.log("getAllUsers-couponsIteamList");
    console.log(couponsItem.couponItemList)
  }, [getItemsFromContext,users,couponsItem]);

  useEffect(() => {
    // setItems(getItemsFromContext.items);
    // console.log(getItemsFromContext.items);
    // console.log(items + "maybe this works");
    // console.log("get all users")
    // console.log(users.getAllUsers);
    // setAllUsers(users.getAllUsers);
    // setCoupons(couponsItem.couponItemList);
    // console.log(allUsers);
    // console.log(coupons);
    console.log("getAllUsers-couponsIteamList num 2");
    console.log(couponsItem.couponItemList)
  }, []);

  

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

{allUsers.map((user)=>{
  return (
  <>
  <p key={user.id}>{user.id} </p>
  </>
  )
})}

{coupons.map((coupon)=>{
  return (
  <>
  <p key={coupon.id}>{coupon.id} </p>
  </>
  )
})}
      </div>
    </div>
  );
}
