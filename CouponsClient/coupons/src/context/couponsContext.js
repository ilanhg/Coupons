import React, { createContext } from "react";
import { useState, useContext } from "react";


 export let couponsItem = {
  couponItemList : [],
  getCoupons: function (getCoupons) {
    console.log(getCoupons)
    console.log("firstCoupons")
    this.couponItemList = getCoupons;
    console.log("secondCoupons")
    console.log(this.couponItemList);
  },
};
export const itemContext = createContext(couponItemList);


