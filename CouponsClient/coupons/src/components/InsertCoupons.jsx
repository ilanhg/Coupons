import React, { useContext } from "react";
import "./InsertCoupons.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { userContext } from "../context/userContext";
import ItemModel from "../models/items-models";
import CouponsModel from "../models/coupon-modle";
import couponsItemService from "../services/serviceCoupon";
export default function InsertCoupons() {
  const [user,setUser] = useState('ziv');
  const getUserFromContext = useContext(userContext);
  const navigatingToHomePage = useNavigate();
  console.log(getUserFromContext.signUpUser.firstName+ 'this is line 11')

  const getAllUsers = async () => {
    const response = await axios.get(
      "http://localhost:4000/api/register/users"
    );
    const data = response.data;
    console.log(data);
  };
  useEffect(() => {
    getAllUsers();
    setUser(getUserFromContext.signUpUser);
    console.log(user+"user line23")
    console.log(getUserFromContext.signUpUser.firstName+ 'this is line 21')
  }, [getUserFromContext]);
async function submit(arg) {
    // const item = new ItemModel(undefined, user, coupon)
    const coupon = new CouponsModel(
      undefined,
      undefined,
      arg.target.couponCode.value,
      arg.target.couponName.value,
      arg.target.expirationDate.value,
      arg.target.couponWebsite.value,
      arg.target.couponAmount.value,
      arg.target.couponPrice.value)
   await couponsItemService.sendOneCoupon(coupon);
   navigatingToHomePage('/home-page');
   arg.preventDefault();
  }
    return (
      <div className="InsertCoupons">
         <h3> Insert Coupons</h3>
       <form onSubmit={submit}>
          <label htmlFor=""> Enter Coupon Code</label>
          <input type="text" placeholder="Coupon Code" name="couponCode" />
          <label htmlFor="">Enter Coupon Name</label>
          <input type="text" placeholder="Coupon Name" name="couponName" />
          <label htmlFor=""> Enter Expiration Date</label>
          <input type="date" placeholder="Expiration Date" name="expirationDate" />
          <label htmlFor="">Enter Coupon Website</label>
          <input type="text" placeholder="Coupon Website" name="couponWebsite"  />
          <label htmlFor=""> Enter Coupon Amount</label>
          <input type="number" placeholder="Coupon Amount"  name="couponAmount"/>
          <label htmlFor=""> Enter Coupon Price</label>
          <input type="number" placeholder="Coupon Price" name="couponPrice" />
          <button>Save Coupons</button>
        </form>
       <span>
        {/* {getUserFromContext.signUpUser.firstName} */}
        </span> 
      </div>
    );
  }