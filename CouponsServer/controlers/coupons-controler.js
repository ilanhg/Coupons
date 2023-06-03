const express = require("express");
const router = express.Router();
const CouponsModel = require(".././models/coupons-model")
const couponsDal = require("../data-access-layers/coupon-users-data-access-layer")
router.get("/", async (request, response) => {
  try {
    const coupons = await couponsDal.allCoupons();
    response.json(coupons);
    
  } catch (error) {
    console.log(error)
  }
});
router.get("/:id", async (request, response) => {
  const idAfterParseToNumber = Number(request.params.id);
  const coupon = await couponsDal.oneCoupons(idAfterParseToNumber);
  response.json(coupon);
});
router.post("/", async (request, response) => {
  const coupon = new CouponsModel(
    request.body.id,
    request.body.FK_userId,
    request.body.couponCode,
    request.body.couponName,
    request.body.expirationDate,
    request.body.couponWebsite,
    request.body.couponPrice
  );
 
  
  console.log("in coupons controller")
  console.log(coupon)
  const savedCoupon = await couponsDal.addCouponToUsersCouponMysqlDatabase(
    coupon
  );
  response.json(savedCoupon);
});

module.exports = router;
