import axios from "axios";
import {coupons} from"../context/couponsContext"

const couponsItemService = {
  getAllCoupons: async () => {
    const response = await axios.get("http://localhost:4000/api/coupons");
    const couponsData = response.data;
    console.log("couponsData")
    console.log(couponsData)
    coupons.getCoupons(couponsData)
    return couponsData;
  },
  
getOneCoupon : async (id)=> {
  // const response = await axios.get()
},
sendOneCoupon : async (oneCoupon) =>{
  console.log(" coupon before to send ......sever in function sendOneCoupon OK ! OK ! OK! ");  
  console.log(oneCoupon)
  const response = await axios.post("http://localhost:4000/api/coupons",oneCoupon);
  // const {data} = await axios.post("http://localhost:4000/api/coupons",oneCoupon);
  const coupon = response.data;
  console.log("print coupon");
  console.log(coupon);
}

};
export default couponsItemService;