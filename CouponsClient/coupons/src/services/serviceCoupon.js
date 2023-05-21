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

sendOneCoupon : async (coupon) =>{
  // const response = await axios.post()
}

};
export default couponsItemService;