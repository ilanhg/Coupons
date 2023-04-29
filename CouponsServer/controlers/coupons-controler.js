const express = require("express");
const router = express.Router();
const CouponsModel = require(".././models/coupons-model")
const couponsDal = require("../data-access-layers/coupon-users-data-access-layer")
router.get("/", async (request, response) => {
  const coupons = await couponsDal.allCoupons();
  response.json(coupons);
});
router.get("/:id", async (request, response) => {
  const idAfterParseToNumber = Number(request.params.id);
  const coupon = await couponsDal.oneCoupons(idAfterParseToNumber);
  response.json(coupon);
});
router.post("/", async (request, response) => {
  const coupon = new CouponsModel(
    request.body.id,
    request.body.numberOfCouponCode,
    request.body.nameOfCoupon,
    request.body.quantityOfCoupons,
    request.body.expirationDateOfCoupon,
    request.body.nameOfCompanyCoupon,
    request.body.nameOfBusinessCoupon,
    request.body.nameWebsiteOfCouponCode 
  );
  const savedCoupon = await couponsDal.addCouponToUsersCouponMysqlDatabase(
    coupon
  );
  response.json(savedCoupon);
});

module.exports = router;
