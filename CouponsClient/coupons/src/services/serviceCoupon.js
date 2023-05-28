import axios from "axios";
import {couponsItem} from"../context/couponsContext"

const couponsItemService = {
  getAllCoupons: async () => {
    const response = await axios.get("http://localhost:4000/api/coupons");
    const couponsData = response.data;
    console.log("couponsData")
    console.log(couponsData)
    couponsItem.getCoupons(couponsData)
    return couponsData;
  },
  
getOneCoupon : async (id)=> {
  // const response = await axios.get()
},

sendOneCoupon : async (oneCoupon) =>{
  console.log("ONE COUPON");
  console.log(oneCoupon);
  const response = await axios.post("http://localhost:4000/api/coupons",oneCoupon);
  const coupon = response.data;
  console.log("print coupon");
  console.log(coupon);
}

};
export default couponsItemService;