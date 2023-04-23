import React, { useContext } from "react";
import "./InsertCoupons.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { userContext } from "../context/userContext";
import ItemModel from "../models/items-models";
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
    const coupon = {
      nameOfCoupon: arg.target.nameOfCoupon.value,
      numberOfCouponCode: arg.target.numberOfCouponCode.value,
      expirationDateOfCoupon: arg.target.expirationDateOfCoupon.value,
      nameOfCompanyCoupon: arg.target.nameOfCompanyCoupon.value,
      nameOfBusinessCoupon: arg.target.nameOfBusinessCoupon.value,
      nameWebsiteOfCouponCode: arg.target.nameWebsiteOfCouponCode.value,
    };
    const item = new ItemModel(undefined, user, coupon)
    console.log(item)
    arg.preventDefault();
    navigatingToHomePage('/home-page');
  }
    return (
      <div className="InsertCoupons">
         <h3> InsertCoupons</h3>
       <form onSubmit={submit}>
          <label htmlFor=""> Enter nameOfCoupon</label>
          <input type="text" placeholder="nameOfCoupon" name="nameOfCoupon" />
          <label htmlFor="">Enter numberOfCouponCode</label>
          <input type="number" placeholder="numberOfCouponCode" name="numberOfCouponCode" />
          <label htmlFor=""> Enter quantityOfCoupons</label>
          <input type="number" placeholder="quantityOfCoupons" name="quantityOfCoupons" />
          <label htmlFor=""> Enter expirationDateOfCoupon</label>
          <input type="number" placeholder="expirationDateOfCoupon" name="expirationDateOfCoupon" />
          <label htmlFor="">Enter nameOfCompanyCoupon</label>
          <input type="text" placeholder="nameOfCompanyCoupon" name="nameOfCompanyCoupon"  />
          <label htmlFor=""> Enter.nameOfBusinessCoupon</label>
          <input type="text" placeholder="nameOfBusinessCoupon"  name="nameOfBusinessCoupon"/>
          <label htmlFor=""> Enter nameWebsiteOfCouponCode</label>
          <input type="text" placeholder="nameWebsiteOfCouponCode" name="nameWebsiteOfCouponCode" />
          <button>Save Coupons</button>
        </form>
       <span>
        {getUserFromContext.signUpUser.firstName}
        </span> 
      </div>
    );
  }