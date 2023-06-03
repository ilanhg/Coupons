import React, { createContext } from "react";
import { useState, useContext } from "react";


 export let coupons = {
  couponList : [],
  getCoupons: function (getCoupons) {
    console.log("in couponsContext")
    console.log(getCoupons)
    this.couponList = getCoupons;
  },
};
export const couponContext = createContext(coupons);


