import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function HomePage() {
  const [allCoupons, setAllCoupons] = useState([
    "FirstUserWithHisCoupons",
    "SecondUserWithHisCoupons",
    "ThirdUserWithHisCoupons",
    "FourthUserWithHisCoupons",
    "FifthUserWithHisCoupons",
    
  ]);
  return <div>
    <h1>HomePage</h1>
    {allCoupons.map((coupon=>{
      return <div><Link to={'/part-of-chat'}>{coupon}</Link></div>
    }))}
   
  
    </div>;
}