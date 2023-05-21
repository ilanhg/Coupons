import React, { createContext } from "react";
import { useState, useContext } from "react";


 export let couponsItem = {
  couponItemList : [],
  getCoupons: function (getCoupons) {
    console.log("in couponsContext")
    console.log(getCoupons)
    this.couponItemList = getCoupons;
  },
};
export const itemContext = createContext(couponsItem);


